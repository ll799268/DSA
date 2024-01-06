/**
 * 困于环中的机器人
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let left = 0,
    top = 0,
    rotate = 0

  for (let i of instructions) {
    switch (i) {
      case 'G':
        rotate = rotate % 360
        if (rotate === 90) {
          left--
        } else if (rotate === 180) {
          top--
        } else if (rotate === 270) {
          left++
        } else {
          top++
        }
        break
      case 'L':
        rotate += 270
        break
      case 'R':
        rotate += 90
        break
    }
  }

  return rotate % 360 !== 0 || left === 0 && top === 0
};

console.log(isRobotBounded('GL'));