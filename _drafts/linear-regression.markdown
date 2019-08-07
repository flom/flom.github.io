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

<div id="test" style="width: 100%; height: 300px; border: 1px solid black;"></div>

I've started to dive into the field of machine learning.
One of the first algorithm that is taught is Linear Regression.
Linear Regression falls into the category of supervised-learning and it is relatively easy to understand and implement.

## What is Linear Regression?

Linear Regression is an alogrithm to compute a linear function which fits our training data best.
What this means can be seen on a very simple example.
Imagine we have a dataset of house sizes and the price for which the houses were sold:

|house #|size ($qm^{2}$)|price (EUR)|
|-|-|-|
|1|100|100000|
|2|100|80000|
|3|150|150000|
|4|200|250000|

Based on this **training data** we want to answer the question for how much we should sell a house of a given size.
Meaning, we want to find a function where we can input the $qm^{2}$ and it gives us a price:

$$
f(qm^{2}) = price
$$

To start let's first plot our **training data** onto a graph:

<div id="graphTrainingData"></div>

We are looking for a linear function which should be very close to the training data points.
The function looks like this:

$$
y = mx + b
$$

where $y$ is the price and $x$ is the size of the house.
The parameters $m$ and $b$ we don't know yet.
With linear regression we want to compute the parameters automatically so that the function outputs values very close to our **training data**. 


## Notation and Terminolgy

- training data
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
