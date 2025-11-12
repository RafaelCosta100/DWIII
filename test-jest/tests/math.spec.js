const { describe } = require('node:test');
const MathUtils = require('../src/math');

describe('MathUtils tests', () => {
    const math = new MathUtils();
    test('soma 1 + 2 deve ser 3', () => {
        expect( math.sum(1, 2) ).toBe(3);
    });
  
    test('soma -1 + 2 deve ser 1', () => {
        expect( math.sum(-1, 2) ).toBe(3);
    });
    
});
