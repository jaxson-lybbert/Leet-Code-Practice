/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // returns an empty string if there is no gcd for the two strings
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // calculates gcd based off string length
  // if str2.length is 0, the gcd is str1.length
  // else, the gcd is the remainder of str1 divided by str2 (?)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  // returns the correct substring length (gcd)
  const len = gcd(str1.length, str2.length);

  console.log(str1.substring(0, len));
  return str1.substring(0, len);
};

gcdOfStrings("ABCABCABC", "ABC");
gcdOfStrings("ABAB", "AB");
