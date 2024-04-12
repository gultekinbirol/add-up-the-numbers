'use strict';

import { addUp } from './solution1.js';

describe('Basic Tests', () => {
    test('should return 10 when 4 is passed', () => {
        expect(addUp(4)).toEqual(10);
    });
    test('should return 180300 when 600 is passed', () => {
        expect(addUp(600)).toEqual(180300);
    });
    test('should return 1 when 1 is passed', () => {
        expect(addUp(1)).toEqual(1);
    });
    test('should throw an error when -9 is passed', () => {
        expect(() => addUp(-9)).toThrow(Error);
    });
    test('should throw an error when 500000 is passed', () => {
        expect(() => addUp(500000)).toThrow(Error);
    });
});
