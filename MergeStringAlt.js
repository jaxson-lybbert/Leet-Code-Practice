/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;

  while (i < word1.length && i < word2.length) {
    res += word1[i];
    res += word2[i];

    i++;
  }

  if (word1.length > i) {
    res += word1.slice(i);
  }

  if (word2.length > i) {
    res += word2.slice(i);
  }

  console.log(res);
  return res;
};

mergeAlternately("abc", "pqr");
