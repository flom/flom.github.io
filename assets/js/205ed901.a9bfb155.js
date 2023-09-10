"use strict";(self.webpackChunkflom_github_io=self.webpackChunkflom_github_io||[]).push([[246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"React pmndrs/zustand Coding Patterns",authors:"flom",tags:["ReactJS","Zustand"]},i=void 0,s={permalink:"/blog/2023/09/10/react-zustand-patterns",source:"@site/blog/2023-09-10-react-zustand-patterns.md",title:"React pmndrs/zustand Coding Patterns",description:"At work and privately I am using the library pmndrs/zustand for state-management in my ReactJS applications.",date:"2023-09-10T00:00:00.000Z",formattedDate:"September 10, 2023",tags:[{label:"ReactJS",permalink:"/blog/tags/react-js"},{label:"Zustand",permalink:"/blog/tags/zustand"}],readingTime:5.875,hasTruncateMarker:!1,authors:[{name:"Florian Mladitsch",title:"Software Developer",url:"https://github.com/flom",imageURL:"https://github.com/flom.png",key:"flom"}],frontMatter:{title:"React pmndrs/zustand Coding Patterns",authors:"flom",tags:["ReactJS","Zustand"]},nextItem:{title:"Open API",permalink:"/blog/2019/07/30/open-api"}},l={authorsImageUrls:[void 0]},p=[{value:"Define the state via interface or types",id:"define-the-state-via-interface-or-types",level:2},{value:"Split attributes and methods",id:"split-attributes-and-methods",level:2},{value:"Resetting the store state",id:"resetting-the-store-state",level:2},{value:"Use custom hooks to access derived data",id:"use-custom-hooks-to-access-derived-data",level:2},{value:"Miscellaneous Stuff",id:"miscellaneous-stuff",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At work and privately I am using the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand"},"pmndrs/zustand")," for state-management in my ReactJS applications.\nZustand is a rather un-opinionated library giving the developer the freedom to implement app-specific requirements in multiple ways.\nWhile working with this library a few coding patterns and best practices emerged that worked well for my projects."),(0,r.kt)("p",null,"Keep in mind that this is just loose and subjective collection."),(0,r.kt)("h2",{id:"define-the-state-via-interface-or-types"},"Define the state via interface or types"),(0,r.kt)("p",null,"The documentation starts with code examples in pure JavaScript but Typescript is supported as well and a guide for it can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md"},"here"),"."),(0,r.kt)("p",null,"As described in this guide the store can be typed by declaring an interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { create } from "zustand";\n\nexport interface ExampleStoreState {\n  count: number;\n}\n\nexport const useExampleStore = create<ExampleStoreState>()(() => ({\n  count: 0,\n}));\n')),(0,r.kt)("p",null,"And usage in a component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ExampleStoreState, useExampleStore } from "./stores/example.store.ts";\n\nfunction App() {\n  const count = useExampleStore((state: ExampleStoreState) => state.count);\n\n  const handleUpdate = () => {\n    useExampleStore.setState((state: ExampleStoreState) => {\n      return {\n        count: state.count + 1,\n      };\n    });\n  };\n\n  return (\n    <>\n      <div>\n        <button onClick={handleUpdate}>Click Me</button>\n      </div>\n      <div>{count}</div>\n    </>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"The advantage of typing your store is that it makes refactoring easier and catches errors during development with the help of static code analysis."),(0,r.kt)("p",null,"Adding the type (",(0,r.kt)("inlineCode",{parentName:"p"},"state: ExampleStoreState"),") in the component might be optional but I like having the types explicitly in my code.\nAdditionally, it makes it easier for me to jump to the definition of the store state type."),(0,r.kt)("p",null,"Opposed to the guide of the documentation I like to use a type definition instead of an interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ExampleStoreState = {\n  count: number;\n};\n\nexport const useExampleStore = create<ExampleStoreState>()(() => ({\n  count: 0,\n}));\n")),(0,r.kt)("p",null,"For simple stores it does not make a difference which variant you use but for my other best practices I'm building upon Typescript types handling."),(0,r.kt)("h2",{id:"split-attributes-and-methods"},"Split attributes and methods"),(0,r.kt)("p",null,"Building upon the previous example we might add a feature which increases the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," by 1."),(0,r.kt)("p",null,"The typical approach for this is to add a method to the store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ExampleStoreState = {\n  count: number;\n  increaseCount: () => void;\n};\n\nexport const useExampleStore = create<ExampleStoreState>()((set) => ({\n  count: 0,\n  increaseCount: () => {\n    set((state: ExampleStoreState) => ({ count: state.count + 1 }));\n  },\n}));\n")),(0,r.kt)("p",null,"With this setup the type ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleStoreState")," ties together the data and behavior of the store.\nFor simple stores this is fine.\nBut when the store gets more complex with a larger state and many methods I like to split the data and methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ExampleStoreStateData = {\n  count: number;\n};\n\ntype ExampleStoreStateMethods = {\n  increaseCount: () => void;\n};\n\nexport type ExampleStoreState = ExampleStoreStateData &\n  ExampleStoreStateMethods;\n\nexport const useExampleStore = create<ExampleStoreState>()((set) => ({\n  count: 0,\n  increaseCount: () => {\n    set((state: ExampleStoreState) => ({ count: state.count + 1 }));\n  },\n}));\n")),(0,r.kt)("p",null,"Splitting it this way gives introduces a bit more structure and helps with my other best practices."),(0,r.kt)("p",null,"Using types instead of interfaces allows us to easily join the data and methods into the complete ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleStoreState"),".\nThe same could be done with interfaces and inheritance but I don't think that the semantics of inheritance is a good fit."),(0,r.kt)("h2",{id:"resetting-the-store-state"},"Resetting the store state"),(0,r.kt)("p",null,"Sometimes I need to restore the initial empty state of the store.\nThis might happen during runtime, but usually I want to reset the state before each test in my automated test suite."),(0,r.kt)("p",null,"The official documentation even has a page for this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand/blob/main/docs/guides/how-to-reset-state.md"},"here"),"."),(0,r.kt)("p",null,"For resetting the state I define the initial state outside and have a method for initialization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ExampleStoreStateData = {\n  count: number;\n};\n\nconst initialState: ExampleStoreStateData = {\n  count: 0,\n};\n\ntype ExampleStoreStateMethods = {\n  increaseCount: () => void;\n  init: () => void;\n};\n\nexport type ExampleStoreState = ExampleStoreStateData &\n  ExampleStoreStateMethods;\n\nexport const useExampleStore = create<ExampleStoreState>()((set) => ({\n  ...initialState,\n  increaseCount: () => {\n    set((state: ExampleStoreState) => ({ count: state.count + 1 }));\n  },\n  init: () => {\n    set(structuredClone(initialState)); // set({...initialSate}) works as well\n  },\n}));\n")),(0,r.kt)("p",null,"This approach builds upon the previous steps of splitting data and behavior.\nWe only need to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleStoreStateData")," and can leave ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleStoreStateMethods")," alone."),(0,r.kt)("h2",{id:"use-custom-hooks-to-access-derived-data"},"Use custom hooks to access derived data"),(0,r.kt)("p",null,"Sometimes the data in my store has some dependencies and relations to each other because of the application business logic."),(0,r.kt)("p",null,"For example my store might contain a larger list of data entries and smaller list of filtered ids meaning that somewhere in the application a filtered list of my entries are displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface DataModel {\n  id: number;\n  name: string;\n}\n\ntype ExampleStoreStateData = {\n  dataSource: DataModel[];\n  filteredIds: number[]; // list of filtered ids to display\n};\n\nconst initialState: ExampleStoreStateData = {\n  dataSource: [\n    {\n      id: 1,\n      name: "First Entry",\n    },\n    {\n      id: 2,\n      name: "Second Entry",\n    },\n    {\n      id: 3,\n      name: "Third Entry",\n    },\n    {\n      id: 4,\n      name: "Fourth Entry",\n    },\n  ],\n  filteredIds: [],\n};\n\ntype ExampleStoreStateMethods = {\n  init: () => void;\n};\n\nexport type ExampleStoreState = ExampleStoreStateData &\n  ExampleStoreStateMethods;\n\nexport const useExampleStore = create<ExampleStoreState>()((set) => ({\n  ...initialState,\n  init: () => {\n    set(structuredClone(initialState));\n  },\n}));\n')),(0,r.kt)("p",null,"One or more components might need the complete ",(0,r.kt)("inlineCode",{parentName:"p"},"dataSource")," (e.g. the filter selection component) and one or more components only needs the filtered list (e.g. display components)."),(0,r.kt)("p",null,"The two most obvious solutions to this is either to implement filtering in your component resulting in duplicate code or to implement it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleStoreMethods")," resulting having business logic in your state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="filter in component"',title:'"filter',in:!0,'component"':!0},"function App() {\n  const dataSource = useExampleStore(\n    (state: ExampleStoreState) => state.dataSource,\n  );\n  const filteredIds = useExampleStore(\n    (state: ExampleStoreState) => state.filteredIds,\n  );\n\n  const filteredData = dataSource.filter((entry) =>\n    filteredIds.includes(entry.id),\n  );\n  return (\n    <>\n      <div>\n        <ul>\n          {filteredData.map((entry) => (\n            <li key={entry.id}>{entry.name}</li>\n          ))}\n        </ul>\n      </div>\n    </>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="filter in store"',title:'"filter',in:!0,'store"':!0},"export const useExampleStore = create<ExampleStoreState>()((set, get) => ({\n  ...initialState,\n  init: () => {\n    set(structuredClone(initialState));\n  },\n  filteredData: () => {\n    const { dataSource, filteredIds } = get();\n\n    return dataSource.filter((entry) => filteredIds.includes(entry.id));\n  },\n}));\n\nfunction App() {\n  const filteredData = useExampleStore(\n    (state: ExampleStoreState) => state.filteredData(),\n  );\n\n  return (\n    <>\n      <div>\n        <ul>\n          {filteredData.map((entry) => (\n            <li key={entry.id}>{entry.name}</li>\n          ))}\n        </ul>\n      </div>\n    </>\n  );\n}\n")),(0,r.kt)("p",null,"What I like to do is to implement a custom hook which does the filtering and just use the hook inside the components that require the filtered data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// e.g. in example.store.hooks.ts\nexport function useFilteredData() {\n  const dataSource = useExampleStore(\n    (state: ExampleStoreState) => state.dataSource,\n  );\n  const filteredIds = useExampleStore(\n    (state: ExampleStoreState) => state.filteredIds,\n  );\n\n  return dataSource.filter((entry) => filteredIds.includes(entry.id));\n}\n\n// App.tsx\nfunction App() {\n  const filteredData = useFilteredData();\n\n  return (\n    <>\n      <div>\n        <ul>\n          {filteredData.map((entry) => (\n              <li key={entry.id}>{entry.name}</li>\n            ))}\n        </ul>\n      </div>\n    </>\n  );\n}\n")),(0,r.kt)("p",null,"It might not make sense to use custom hooks for everything, but I like the clarity and separation of concerns of this approach."),(0,r.kt)("h2",{id:"miscellaneous-stuff"},"Miscellaneous Stuff"),(0,r.kt)("p",null,"Some other smaller tips are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Don't put everything into one large store, split accordingly to application logic"),(0,r.kt)("li",{parentName:"ul"},"updating the state with ",(0,r.kt)("inlineCode",{parentName:"li"},"useExampleStore.setState({...})")," is often easier than implementing an update method on the store itself")))}c.isMDXComponent=!0}}]);