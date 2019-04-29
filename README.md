# typecheck

Really simple type check function tool with **Pure JavaScript**. Check varible type in JavaScript.
**Rewrited by TypeScript**

## Install

```shell
npm i @konata9/typecheck.js
```

## Usage

**require usage has benn changed!**

```javascript
import typecheck from '@konata9/typecheck.js';
// or
import { typeCheck } from '@konata9/typecheck.js';
// or
const { typecheck } = require('@konata9/typecheck.js');

const arr = [];
typecheck(arr); // array
```

### typecheck(target)

The `target` is the varible you want to check. The return **type string** in table below.

| type      | example                               | return    |
| --------- | ------------------------------------- | --------- |
| string    | `typecheck("a")`                      | string    |
| number    | `typecheck(1)`                        | number    |
| boolean   | `typecheck(true)`                     | boolean   |
| null      | `typecheck(null)`                     | null      |
| undefined | `typecheck(undefined)`                | undefined |
| Object    | `typecheck({})`                       | object    |
| Array     | `typecheck([])`                       | array     |
| Set       | `typecheck(new Set())`                | set       |
| Map       | `typecheck(new Map())`                | map       |
| Symobol   | `typecheck(Symbol())`                 | symbol    |
| Function  | `typecheck((a, b)=> a + b) | function |

### Test

This module is tested by mocha. You can find the test case in test folder or run the test command below (You need full source on the github page).

```shell
npm run test
```
