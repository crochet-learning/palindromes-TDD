const palidromes = require('../src/palindromes');

describe('palindromes', () => {
    it('correctly identifies one-word palindromes', () => {
        expect(palidromes('madam')).toEqual(['madam']);
    });
});