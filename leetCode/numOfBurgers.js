/**
 * 不浪费原料的汉堡制作方案
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices === 0 && cheeseSlices === 0) return [0, 0]

  let i = cheeseSlices,
    j = 0

  while (i >= 0) {
    if (4 * i + 2 * j === tomatoSlices) {
      return [i, j]
    }
    i--
    j++
  }
  return []
};

var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 !== 0) return []
  
  let x = tomatoSlices / 2 - cheeseSlices
  let y = cheeseSlices - x
  
  if (Number.isInteger(x) && x >=0 && y >= 0) {
    return [x, y]
  }

  return []
};



console.log(numOfBurgers(16, 7))