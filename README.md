# @selfage/counter

## Install

`npm install @selfage/counter`

## Overview

A dead simple implementation of an in-memory Counter class written in
TypeScript. Compiled to ES6.

## Usage

```TypeScript
import { Counter } from '@selfage/counter';

// Specify a key type, which can be anything supported by native JS Map.
let counter = new Counter<string>();
let value = counter.get('new key');
// value is 0.
value = counter.increment('another key');
// value is 1.
value = counter.increment('another key', 11);
// value is 12.
// Technically, you can increment by 0 or negative values, but it's discouraged.
let size = counter.size;
// size is 1, because 'new key' is never incremented.
for (let [key, count] of counter /* or `counter.entries()` */) {
  console.log(`${key}: ${count}`);
}
// Prints:
// another key: 12
```

## Test matcher

Provides an implementation of test matcher to be used with `@selfage/test_base`.

```TypeScript
import { eqCounter } from '@selfage/counter/tet_matcher';
import { Counter } from '@selfage/counter';
import { assertThat, eq } from '@selfage/test_base/matcher'; // Install `@selfage/test_base`.

let counter = new Counter<string>();
counter.increment('key1');
counter.increment('key2', 10);
// Match counter in insertion order.
assertThat(counter, eqCounter([[eq('key1'), 1], [eq('key2', 10)]]), 'counter');
```
