const reverseString = (str) => {
  const array = str.split('');
  const reverseArray = array.reverse();
  return reverseArray.join('');
};

const isPalindrome = (str) => {
  return reverseString(str) === str ? [str] : [];
};

module.exports = (str) => {
  const newString = str.toLowerCase().replace(/\W/g, '');
  return isPalindrome(newString);
};
