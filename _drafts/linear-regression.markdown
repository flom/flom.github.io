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

Linear Regression is an alogrithm to compute a linear function which fits our training set best.
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
With linear regression we want to compute the parameters automatically so that the function outputs values very close to our data. 
For example, giving 150 into the function should output a value close to 150000 ($f(150) \approx 150000$).

## Notation and Terminology

Before starting with Linear Regression I want to introduce a few terms and definitions commonly used in Machine Learning.

First off our dataset (in our case house size and price) is called **training set**.
With our training set we (who would have guessed) train our Machine Learning algorithm.

The input variables in our training set are called **features**.
In our case we have only one feature which is the house size ($qm^{2}$).
But for more complex cases we could have more than one feature.
For example in our scenario we could look at the house size, number of bedrooms, and number of floors as our features.
Linear Regression with multiple features is called **Multivariate Linear Regression**.

For input column in our training set we use $x_{n}$ to denote the column of the feature and $y$ for the output:

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

- hypothesis
- theta


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
