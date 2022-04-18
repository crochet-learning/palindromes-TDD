const palidromes = require('./palindromes');

describe('palindromes', () => {
    it('correctly identifies one-word palindromes', () => {
        expect(palidromes('madam')).toEqual(['madam']);
    });
});