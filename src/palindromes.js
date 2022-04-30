const reverseString = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};

const isPalindrome = (str) => {
  return reverseString(str) === str ? [str] : [];
};

module.exports = (str) => {
  const newString = str.toLowerCase().replace(/\W/g, '');
  return isPalindrome(newString);
};
