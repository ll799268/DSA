/**
 * 保龄球游戏的获胜者
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const n = player1.length;

  let ans1 = 0,
    ans2 = 0,
    isDouble1 = 0,
    isDouble2 = 0

  for (let i = 0; i < n; i++) {
    const curry1 = player1[i]
    const curry2 = player2[i]

    ans1 += isDouble1-- > 0 ? 2 * curry1 : curry1
    ans2 += isDouble2-- > 0 ? 2 * curry2 : curry2

    if (curry1 === 10) {
      isDouble1 = 2
    }
    if (curry2 === 10) {
      isDouble2 = 2
    }
  }

  return ans1 === ans2 ? 0 : ans1 > ans2 ? 1 : 2
};


var isWinner = function (player1, player2) {
  let ans1 = 0,
    ans2 = 0

  for (let i = 0; i < player1.length; i++) {
    ans1 += player1[i - 1] === 10 || player1[i - 2] === 10 ?
      player1[i] * 2 :
      player1[i]

    ans2 += player2[i - 1] === 10 || player2[i - 2] === 10 ?
      player2[i] * 2 :
      player2[i]
  }

  return ans1 === ans2 ? 0 : ans1 > ans2 ? 1 : 2
};

console.log(isWinner([3, 6, 10, 8], [9, 9, 9, 9]));