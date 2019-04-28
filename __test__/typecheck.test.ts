import typeCheck from '../src/index';

test('string type check', () => expect(typeCheck('')).toBe('string'));
test('number type check', () => expect(typeCheck(1)).toBe('number'));
test('null type check', () => expect(typeCheck(null)).toBe('null'));
test('undefined type check', () => expect(typeCheck(undefined)).toBe('undefined'));
test('boolean type check', () => expect(typeCheck(true)).toBe('boolean'));
test('object type check', () => expect(typeCheck({})).toBe('object'));
test('array type check', () => expect(typeCheck([])).toBe('array'));
test('set type check', () => expect(typeCheck(new Set())).toBe('set'));
test('map type check', () => expect(typeCheck(new Map())).toBe('map'));
test('symbol type check', () => expect(typeCheck(Symbol())).toBe('symbol'));
test('function type check', () => expect(typeCheck((a, b) => a + b)).toBe('function'));
