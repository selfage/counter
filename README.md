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
```
