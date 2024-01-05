/**
 * 机器人能否回到原点
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let pos = [0, 0]
  for (let m of moves) {
    switch (m) {
      case 'U':
        pos[0]++
        break;
      case 'D':
        pos[0]--
        break;
      case 'L':
        pos[1]++
        break;
      case 'R':
        pos[1]--
        break;
      default:
        break;
    }
  }

  return pos.join('') === '00'
};

console.log(judgeCircle('RLUURDDDLU'));