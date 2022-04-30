const palidromes = require('../src/palindromes');

describe('palindromes', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palidromes('madam')).toEqual(['madam']);
    expect(palidromes('racecar')).toEqual(['racecar']);
  });

  it('returns an empty array when no palindrome is present', () => {
    expect(palidromes('tic tac toe')).toEqual([]);
  });

  it('ignores casing', () => {
    expect(palidromes('WoW')).toEqual(['wow']);
  });

  it('ignores punctuation', () => {
    expect(palidromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });

  it('detects multi-word palindromes', () => {
    expect(palidromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });
});
