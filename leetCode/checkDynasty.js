/**
 * 文物朝代判断
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function (places) {
  const set = new Set()

  let min = 14, max = 0

  for (let i = 0; i < places.length; i++) {
    if (!num) continue
    if (set.has(places[i])) return false
    set.add(places[i])
    min = Math.min(min, places[i])
    max = Math.max(max, places[i])
  }

  return max - min < 5
};