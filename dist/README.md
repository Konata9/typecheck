# typecheck
Really simple type check function tool. Check varible type in JavaScript.

## Install
```shell
npm i @konata9/typecheck.js
```

## Usage
```javascript
import typecheck from '@konata9/typecheck.js'
// or
const typecheck = require('@konata9/typecheck.js')

const arr = []
typecheck(arr) // array
```

### typecheck(target) 
The `target` is the varible you want to check. The return **type string** in table below.

| type | example | return
| --- | ------- | --------
| string | `typecheck("a")` | string
| number | `typecheck(1)` | number
| boolean | `typecheck(true)` | boolean
| null | `typecheck(null)` | null
| undefined | `typecheck(undefined)` | undefined
| Object| `typecheck({})` | object
| Array | `typecheck([])` | array
| Set | `typecheck(new Set())` | set
| Map | `typecheck(new Map())` | map
