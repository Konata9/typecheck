import { typeCheck } from './../dist/index';
// const {typeCheck} = require('../dist/index');

test('builded file test', () => expect(typeCheck(new Function())).toBe('function'));
