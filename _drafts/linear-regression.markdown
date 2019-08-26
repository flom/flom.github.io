---
layout: post
title:  "Machine Learning - Linear Regression"
date:   2019-07-31
jsarr:
  - scripts/plot.js
  - scripts/plot-training-data.js
math: true
---

## Intro

I've started to dive into the field of machine learning.
One of the first algorithm that is taught is **Linear Regression**.
Linear Regression falls into the category of supervised-learning and it is relatively easy to understand and implement.

## What is Linear Regression?

Linear Regression is an algorithm to compute a linear function which fits our training set best.
What this means can be seen on a very simple example.
Imagine we have a dataset of house sizes and the price for which the houses were sold:

|house #|size ($qm^{2}$)|price (EUR)|
|-|-|-|
|1|100|100000|
|2|100|80000|
|3|150|150000|
|4|200|250000|

Based on this data we want to answer the question for how much we should sell a house of a given size.
Meaning, we want to find a function where we can input the $qm^{2}$ and it gives us a price:

$$
f(qm^{2}) = price
$$

To start let's plot our data onto a graph:

<div id="graphTrainingData"></div>

We are looking for a linear function which should be very close to the data points.
The function looks like this:

$$
f(x) = y = mx + b
$$

where $y$ is the price and $x$ is the size of the house.
The parameters $m$ and $b$ we don't know yet.
With linear regression we want to compute the parameters $m$ and $b$ automatically so that the function outputs values very close to our data. 
For example, giving 150 into the function should output a value close to 150000: $f(150) \approx 150000$.

## Notation and Terminology

Before starting with Linear Regression I want to introduce a few terms and definitions commonly used in Machine Learning.

First off our dataset (in our case house size and price) is called **training set**.
With our training set we (who would have guessed) train our Machine Learning algorithm.

The input variables in our training set are called **features**.
In our case we have only one feature which is the house size ($qm^{2}$).
But for more complex cases we could have more than one feature.
For example in our scenario we could look at the house size, number of bedrooms, and number of floors as our features.
Linear Regression with multiple features is called **Multivariate Linear Regression**.

For the input column in our training set we use $x_{n}$ to denote the column of the feature and $y$ for the output:

|#|$x_{1}$|$y$|
|-|-|-|
|1|100|100000|
|2|100|80000|
|3|150|150000|
|4|200|250000|

To talk about a single training example we use $x^{(i)}$ where i is the row number. 
For example the second row we can write as follows:

$$
(x^{(2)}_{1}, y) = (100, 80000)
$$

The function we want to compute ($f(x) = mx + b$) is called the **hypothesis**.
Written in our new notation this function looks as follows:

$$
y = \theta_{0} + \theta_{1} x_{1} 
$$

Where $\theta_{i}$ denotes the **parameters** of the hypothesis ($\theta_{0} = b$, $\theta_{1} = m$). 
For more complicated hypothesis function (e.g. more than one feature) we could have more than two $\theta$ parameters:

$$
y = \theta_{0} + \theta_{1} x_{1} + \theta_{2} x_{2} + ...
$$

## Cost Function

As mentioned before with Linear Regression we try to compute the parameters $\theta_{i}$ so that the hypothesis function ends up being close to our training data.
So, let's say, as a first guess we pick $\theta_{0} = 100$ and $\theta_{1} = 500$ so that our first hypothesis looks like:

$$
h_{1}(x) = y = 100 + 500 x
$$

And as a second guess we pick $\theta_{0} = 200$ and $\theta_{1} = 1000$:

$$
h_{2}(x) = y = 200 + 1000 x
$$

How do we know which of the two functions fits our training data better?

This is where the **cost function** comes into play. 
The cost function $J$ gives us an accuracy score of a hypothesis.
The lower the cost the better the hypothesis is.
It looks like this:

$$
J(\theta_{0}, \theta_{1}) = \frac{1}{2m} \sum^{m}_{i=1} (h_{\theta}(x_{i}) - y_{i})^{2}
$$

The function is called the *Squared error function*, or *Mean squared error*. 
$m$ is the number of training examples.
Simply speaking the cost function goes through each training example and compares the output of our hypothesis with the actual output value $y$.
Let's calculate the cost for our two example hypothesis function based on our training set $m = 4$:

Cost of $h_{1}$ with $\theta_{0} = 100$ and $\theta_{1} = 500$:

$$
\begin{eqnarray*}
    &J(100, 500) = \frac{1}{2 \cdot 4} \sum^{4}_{i=1} (h_{\theta}(x_{i}) - y_{i})^{2} \\
    &J(100, 500) = \frac{1}{8} ((h_{\theta}(100) - 100000)^{2} 
                                + (h_{\theta}(100) - 80000)^{2}
                                + (h_{\theta}(150) - 150000)^{2}
                                + (h_{\theta}(200) - 250000)^{2}) \\
    &J(100, 500) = \frac{1}{8} ((50100 - 100000)^{2} 
                                + (50100 - 80000)^{2}
                                + (75100 - 150000)^{2}
                                + (100100 - 250000)^{2}) \\
    &J(100, 500) = \frac{1}{8} (2490010000
                                + 894010000
                                + 5610010000
                                + 22470010000) \\
    &\underline{J(100, 500) = 3.933.005.000}
\end{eqnarray*}
$$

Cost of $h_{2}$ with $\theta_{0} = 200$ and $\theta_{1} = 1000$:

$$
\begin{eqnarray*}
    &J(200, 1000) = \frac{1}{2 \cdot 4} \sum^{4}_{i=1} (h_{\theta}(x_{i}) - y_{i})^{2} \\
    &J(200, 1000) = \frac{1}{8} ((h_{\theta}(100) - 100000)^{2} 
                                + (h_{\theta}(100) - 80000)^{2}
                                + (h_{\theta}(150) - 150000)^{2}
                                + (h_{\theta}(200) - 250000)^{2}) \\
    &J(200, 1000) = \frac{1}{8} ((100200 - 100000)^{2} 
                                + (100200 - 80000)^{2}
                                + (150200 - 150000)^{2}
                                + (200200 - 250000)^{2}) \\
    &J(200, 1000) = \frac{1}{8} (40000
                                + 408040000
                                + 40000
                                + 2480040000) \\
    &\underline{J(200, 1000) = 361.020.000}
\end{eqnarray*}
$$

As we can see the cost of our second hypothesis is lower than of our first hypothesis.
Plotting both hypothesis function we can see this as well:

- insert plot here

### Outline

- what is linear regression?
- simple example (house pricing?)
- hypothesis, cost function
  - interactive demo with JS
- feature scaling
- implementation in python
- using SciKitlearn

---

- js plotting
  - use canvas + sliders for y=mx+b
- examples: https://www.quora.com/What-are-some-real-world-applications-of-simple-linear-regression

---

### Credits

- coursera course
