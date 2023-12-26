/**
 * 最好的扑克手牌
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every(item => item === suits[0])) return 'Flush'

  const map = {}
  let max = 0
  for (let i = 0; i < 5; i++) {
    const r = ranks[i]
    if (r in map) {
      map[r]++
      max = Math.max(max, map[r])
    } else {
      map[r] = 1
    }
  }
 
  if (max >= 3) {
    return 'Three of a Kind'
  } else if (max >= 2) {
    return 'Pair'
  }
  return 'High Card'
};

console.log(bestHand([12, 12, 12, 9, 9], ["b", "d", "a", "c", "b"]));