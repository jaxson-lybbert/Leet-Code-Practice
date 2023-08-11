/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // checks to see what the maximum amount of candies possible is
  const maxCandies = Math.max(...candies);
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    // if giving a kid the extra candy is greater than or equal to the max amount of candy possible, push true
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      // else push false
      result.push(false);
    }
  }

  console.log(result);
  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
