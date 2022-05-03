const { isPalindrome, stringStartPalindrome } = require('../src/solution');
const palidromes = require('../src/solution');

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
      'amanaplanacanalpanama'
    ]);
  });
});

describe('isPalindrome', () => {
  it('returns true when given a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });

  it('returns false when given a non-palindrome', () => {
    expect(isPalindrome('abb')).toBe(false);
    expect(isPalindrome('aaba')).toBe(false);
  });
});

describe('stringStartPalindrome', () => {
  it('returns the longest palindrome at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('ahha')).toBe('ahha');
    expect(stringStartPalindrome('hohoho')).toBe('hohoh');
  });
});
