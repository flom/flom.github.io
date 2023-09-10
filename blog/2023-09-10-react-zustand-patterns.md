---
title:  "React pmndrs/zustand Coding Patterns"
authors: flom
tags: [ReactJS, Zustand]
---

At work and privately I am using the library [pmndrs/zustand](https://github.com/pmndrs/zustand) for state-management in my ReactJS applications.
Zustand is a rather un-opinionated library giving the developer the freedom to implement app-specific requirements in multiple ways.
While working with this library a few coding patterns and best practices emerged that worked well for my projects.

Keep in mind that this is just loose and subjective collection.

## Define the state via interface or types

The documentation starts with code examples in pure JavaScript but Typescript is supported as well and a guide for it can be found [here](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md).

As described in this guide the store can be typed by declaring an interface.

```typescript
import { create } from "zustand";

export interface ExampleStoreState {
  count: number;
}

export const useExampleStore = create<ExampleStoreState>()(() => ({
  count: 0,
}));
```

And usage in a component:

```tsx
import { ExampleStoreState, useExampleStore } from "./stores/example.store.ts";

function App() {
  const count = useExampleStore((state: ExampleStoreState) => state.count);

  const handleUpdate = () => {
    useExampleStore.setState((state: ExampleStoreState) => {
      return {
        count: state.count + 1,
      };
    });
  };

  return (
    <>
      <div>
        <button onClick={handleUpdate}>Click Me</button>
      </div>
      <div>{count}</div>
    </>
  );
}

export default App;
```

The advantage of typing your store is that it makes refactoring easier and catches errors during development with the help of static code analysis.

Adding the type (`state: ExampleStoreState`) in the component might be optional but I like having the types explicitly in my code.
Additionally, it makes it easier for me to jump to the definition of the store state type.

Opposed to the guide of the documentation I like to use a type definition instead of an interface.

```typescript
export type ExampleStoreState = {
  count: number;
};

export const useExampleStore = create<ExampleStoreState>()(() => ({
  count: 0,
}));
```

For simple stores it does not make a difference which variant you use but for my other best practices I'm building upon Typescript types handling.

## Split attributes and methods

Building upon the previous example we might add a feature which increases the `counter` by 1.

The typical approach for this is to add a method to the store.

```typescript
export type ExampleStoreState = {
  count: number;
  increaseCount: () => void;
};

export const useExampleStore = create<ExampleStoreState>()((set) => ({
  count: 0,
  increaseCount: () => {
    set((state: ExampleStoreState) => ({ count: state.count + 1 }));
  },
}));
```

With this setup the type `ExampleStoreState` ties together the data and behavior of the store.
For simple stores this is fine.
But when the store gets more complex with a larger state and many methods I like to split the data and methods.

```typescript
type ExampleStoreStateData = {
  count: number;
};

type ExampleStoreStateMethods = {
  increaseCount: () => void;
};

export type ExampleStoreState = ExampleStoreStateData &
  ExampleStoreStateMethods;

export const useExampleStore = create<ExampleStoreState>()((set) => ({
  count: 0,
  increaseCount: () => {
    set((state: ExampleStoreState) => ({ count: state.count + 1 }));
  },
}));
```

Splitting it this way gives introduces a bit more structure and helps with my other best practices.

Using types instead of interfaces allows us to easily join the data and methods into the complete `ExampleStoreState`.
The same could be done with interfaces and inheritance but I don't think that the semantics of inheritance is a good fit.

## Resetting the store state

Sometimes I need to restore the initial empty state of the store.
This might happen during runtime, but usually I want to reset the state before each test in my automated test suite.

The official documentation even has a page for this [here](https://github.com/pmndrs/zustand/blob/main/docs/guides/how-to-reset-state.md).

For resetting the state I define the initial state outside and have a method for initialization.

```typescript
type ExampleStoreStateData = {
  count: number;
};

const initialState: ExampleStoreStateData = {
  count: 0,
};

type ExampleStoreStateMethods = {
  increaseCount: () => void;
  init: () => void;
};

export type ExampleStoreState = ExampleStoreStateData &
  ExampleStoreStateMethods;

export const useExampleStore = create<ExampleStoreState>()((set) => ({
  ...initialState,
  increaseCount: () => {
    set((state: ExampleStoreState) => ({ count: state.count + 1 }));
  },
  init: () => {
    set(structuredClone(initialState)); // set({...initialSate}) works as well
  },
}));
```

This approach builds upon the previous steps of splitting data and behavior.
We only need to initialize `ExampleStoreStateData` and can leave `ExampleStoreStateMethods` alone.

## Use custom hooks to access derived data

Sometimes the data in my store has some dependencies and relations to each other because of the application business logic.

For example my store might contain a larger list of data entries and smaller list of filtered ids meaning that somewhere in the application a filtered list of my entries are displayed.

```typescript
interface DataModel {
  id: number;
  name: string;
}

type ExampleStoreStateData = {
  dataSource: DataModel[];
  filteredIds: number[]; // list of filtered ids to display
};

const initialState: ExampleStoreStateData = {
  dataSource: [
    {
      id: 1,
      name: "First Entry",
    },
    {
      id: 2,
      name: "Second Entry",
    },
    {
      id: 3,
      name: "Third Entry",
    },
    {
      id: 4,
      name: "Fourth Entry",
    },
  ],
  filteredIds: [],
};

type ExampleStoreStateMethods = {
  init: () => void;
};

export type ExampleStoreState = ExampleStoreStateData &
  ExampleStoreStateMethods;

export const useExampleStore = create<ExampleStoreState>()((set) => ({
  ...initialState,
  init: () => {
    set(structuredClone(initialState));
  },
}));
```

One or more components might need the complete `dataSource` (e.g. the filter selection component) and one or more components only needs the filtered list (e.g. display components).

The two most obvious solutions to this is either to implement filtering in your component resulting in duplicate code or to implement it in your `ExampleStoreMethods` resulting having business logic in your state.

```tsx title="filter in component"
function App() {
  const dataSource = useExampleStore(
    (state: ExampleStoreState) => state.dataSource,
  );
  const filteredIds = useExampleStore(
    (state: ExampleStoreState) => state.filteredIds,
  );

  const filteredData = dataSource.filter((entry) =>
    filteredIds.includes(entry.id),
  );
  return (
    <>
      <div>
        <ul>
          {filteredData.map((entry) => (
            <li key={entry.id}>{entry.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

```tsx title="filter in store"
export const useExampleStore = create<ExampleStoreState>()((set, get) => ({
  ...initialState,
  init: () => {
    set(structuredClone(initialState));
  },
  filteredData: () => {
    const { dataSource, filteredIds } = get();

    return dataSource.filter((entry) => filteredIds.includes(entry.id));
  },
}));

function App() {
  const filteredData = useExampleStore(
    (state: ExampleStoreState) => state.filteredData(),
  );

  return (
    <>
      <div>
        <ul>
          {filteredData.map((entry) => (
            <li key={entry.id}>{entry.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

What I like to do is to implement a custom hook which does the filtering and just use the hook inside the components that require the filtered data.

```tsx
// e.g. in example.store.hooks.ts
export function useFilteredData() {
  const dataSource = useExampleStore(
    (state: ExampleStoreState) => state.dataSource,
  );
  const filteredIds = useExampleStore(
    (state: ExampleStoreState) => state.filteredIds,
  );

  return dataSource.filter((entry) => filteredIds.includes(entry.id));
}

// App.tsx
function App() {
  const filteredData = useFilteredData();

  return (
    <>
      <div>
        <ul>
          {filteredData.map((entry) => (
              <li key={entry.id}>{entry.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
```

It might not make sense to use custom hooks for everything, but I like the clarity and separation of concerns of this approach.

## Miscellaneous Stuff

Some other smaller tips are

- Don't put everything into one large store, split accordingly to application logic
- updating the state with `useExampleStore.setState({...})` is often easier than implementing an update method on the store itself
