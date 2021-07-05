---
layout: post
title:  "Arrow Functions in JavaScript"
date:   2021-07-05 12:48:00 -0400
categories: JavaScript
---

In this post, I'll just quickly go over how to use arrow functions in JavaScript. This is more so for me just so that I remember how to use them. This blog is based on the [MDN Web Docs][MDN].

## Single Parameter Functions

First, let's start off with a traditional function:

{% highlight js %}
function (a) {
  return a + 100;
}
{% endhighlight %}

To "convert" this into an arrow function, we first remove the word `function` and place an arrow `=>` between the end parantheses `)` and curly brackets `{`.

{% highlight js %}
(a) => {
  return a + 100;
}
{% endhighlight %}

We can then remove the body brackets and `return` since `return` is implied without brackets.

{% highlight js %}
(a) => a + 100;
{% endhighlight %}

If we're only passing in a single parameter, we can also remove the paratheses but, personally, it makes it easier to read with the parantheses.

## Multiple Parameter Functions

Once again, we start off with a traditional function, but this time with multiple parameters:

{% highlight js %}
function (a, b) {
  return a + b + 100;
}
{% endhighlight %}

First, we remove the word `function` and place an arrow `=>` between the closing parantheses `)` and open body bracket `{`.

{% highlight js %}
(a, b) => {
  return a + b + 100;
}
{% endhighlight %}

Then, remove the body brackets and the word `return`, since return is implied when no body brackets are used.

{% highlight js %}
(a, b) => a + b + 100;
{% endhighlight %}

The steps are the same if we have a function with no parameters. An example looks like:

{% highlight js %}
() => 100;
{% endhighlight %}

## More Than Just a Return

Now, if we have multiple lines in our function, then we must use the body brackets `{}` **and** `return`. 

Let's convert the following function:

{% highlight js %}
function (a, b) {
  let chuck = 42;
  return a + b + chuck;
}
{% endhighlight %}

We apply the same steps but **must** include the body brackets and `return`.

{% highlight js %}
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
{% endhighlight %}

## Functions with Names

If we have a function with a name, such as:

{% highlight js %}
function bob (a) {
  return a + 100;
}
{% endhighlight %}

We just need to store the arrow function in a variable. So, after converting the traditional function to an arrow function, it will look like:

{% highlight js %}
let bob = (a) => a + 100;
{% endhighlight %}

That's the extend to what I'll go to with arrow functions. You can read the rest on the [MDN Web Docs][MDN]

So, 今天就讲到这,

Timothy Wang

[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
