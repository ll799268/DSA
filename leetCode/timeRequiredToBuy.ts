/**
 * 买票需要的时间
 * @param tickets 
 * @param k 
 * @returns 
 */

function timeRequiredToBuy(tickets: number[], k: number): number {
  const n = tickets.length
  let res = 0;

  for (let i = 0; i < n; i++) {
    res += Math.min(tickets[i], i <= k ? tickets[k] : tickets[k] - 1)
  }
  return res
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
