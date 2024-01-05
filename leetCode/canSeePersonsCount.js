/**
 * 队列中可以看到的人数
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const n = heights.length
  const ans = Array(n).fill(0)
  const st = []

  for (let i = n - 1; i >= 0; i--) {
    while (st.length && heights[i] > st[st.length - 1]) {
      st.pop()
      ans[i]++
    }

    if (st.length) {
      ans[i]++
    }

    st.push(heights[i])
  }

  return ans
};

console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9]));