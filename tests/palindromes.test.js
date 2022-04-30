const palidromes = require('../src/palindromes');

describe('palindromes', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palidromes('madam')).toEqual(['madam']);
    expect(palidromes('racecar')).toEqual(['racecar']);
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
