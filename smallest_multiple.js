/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  let x = 1;
  let y = 1;
  while (y <= ceiling) {
    if (x % y === 0) {
      y++;
    } else {
      x++;
      y = 1;
    }
  }

  return x;
};
