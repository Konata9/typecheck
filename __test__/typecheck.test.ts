import typeCheck from '../src/index';

test('string type check: "" => string', () => expect(typeCheck('')).toBe('string'));
test('number type check: 1 => number', () => expect(typeCheck(1)).toBe('number'));
test('null type check: null => null', () => expect(typeCheck(null)).toBe('null'));
test('undefined type check: undefined => undefined', () => expect(typeCheck(undefined)).toBe('undefined'));
test('boolean type check: true => boolean', () => expect(typeCheck(true)).toBe('boolean'));
test('object type check: {} => object', () => expect(typeCheck({})).toBe('object'));
test('array type check: [] => array', () => expect(typeCheck([])).toBe('array'));
test('set type check: new Set() => set', () => expect(typeCheck(new Set())).toBe('set'));
test('map type check: new Map() => map', () => expect(typeCheck(new Map())).toBe('map'));
test('symbol type check: Symbol() => symbol', () => expect(typeCheck(Symbol())).toBe('symbol'));
test('function type check: (a, b)=> a + b => function', () => expect(typeCheck((a, b) => a + b)).toBe('function'));
