---
usemathjax: true
layout: post
title:  "1D Prefix Sum"
date:   2022-07-06 11:47:04 -0400
categories: algorithms
---
Today I'm going to talk about the prefix sum array. It's a simple yet powerful "data structure".
### Problem:

Given an array of $$N$$ integers, do the following operation $$Q$$ times:

* Output the sum of all elements from indexes $$L$$ through $$R$$, inclusive (not necessarily the same each time)

### Standard Approach:

The standard approach would be: for each operation, use a for loop from indexes $$L$$ through $$R$$, inclusive. We can use a variable
to keep track of the sum, and then output the sum variable.

{% highlight cpp %}
// get input
int N, Q;
std::cin >> N >> Q;
int arr[N];
for (int i = 0; i < N; ++i) {
    std::cin >> ar[i];
}

// process queries
for (int q = 0; q < Q; ++q) {
    int L, R;
    std::cin >> L >> R;
    int sum = 0;
    // get sum of elements from [L, R]
    for (int i = L; i <= R; ++i) {
        sum += arr[i];
    }
    std::cout << sum << '\n';
}
{% endhighlight %}

What's the worst case? Well, every time, we must output the sum of the entire array. Thus, the runtime is $$O(NQ)$$.

### Prefix Sum Array Solution

Can we manipulate the array to speed up our operations? 

Note that the array elements themselves do not change (or transfer to another array).

First, let $$pre[i] = ar[0] + ar[1] + ... + ar[i]$$. 

How do we compute the sum from $$L$$ through $$R$$, inclusive? The answer is: $$pre[R] - pre[L - 1]$$

Why does $$pre[R] - pre[L - 1]$$ give us the sum between $$[L, R]$$?

We know that: 

$$pre[R] = ar[0] + ar[1] + ... + ar[R]$$

$$pre[L - 1] = ar[0] + ar[1] + ... ar[L - 1]$$

So that means, $$pre[R] - pre[L - 1] = ar[L] + ar[L + 1] + ... + ar[R]$$

### Prefix Sum Array Generation

How do we generate $$pre[i]$$? 

* We begin with $$pre[0] = ar[0]$$. 
* Next, $$pre[1] = ar[0] + ar[1]$$. 
* But since $$pre[0] = ar[0]$$, we can also say $$pre[1] = pre[0] + ar[1]$$. 
* Similarly, $$pre[2] = ar[0] + ar[1] + ar[2]$$. But since $$pre[1] = ar[0] + ar[1]$$, we can say $$pre[2] = pre[1] + ar[2]$$. 

Therefore, $$pre[i] = pre[i - 1] + ar[i]$$. In other words, we should use the previous prefix sum value and
the current element to get the current prefix sum value.

### Example

If we had the array:

$$[1, 5, 9, 2, 3, 8, 10, 7, 4, 6]$$

Then the corresponding prefix sum array is:

$$[1, 6, 15, 17, 20, 28, 38, 45, 49, 55]$$

Queries:
* Sum from indexes 0 through 9
  * 55 - 0: 55
* Sum from indexes 1 through 6 
  * 38 - 1: 37
* Sum from indexes 3 through 7
  * 45 - 15: 30

### Pseudocode
{% highlight cpp %}
int N, Q;
std::cin >> N >> Q;
int arr[N + 1], pre[N + 1];
for (int i = 1; i <= N; ++i) {
    std::cin >> arr[i];
}

// generate prefix sum array
pre[0] = ar[0];
for (int i = 1; i <= N; ++i) {
    pre[i] = pre[i - 1] + ar[i];
}

// query
for (int i = 0; i < Q; ++i) {
    std::cout << pre[R] - pre[L - 1] << '\n';
}
{% endhighlight %}

### Runtime
* Query (operation): $$O(1)$$
  * We only need to access 2 positions in the prefix sum array for each query
* Update (change values): $$O(N)$$
  * Prefix sum array must be rebuilt

In my next article, I will talk about the 1D difference array.