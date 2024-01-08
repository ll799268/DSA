/**
 * 在区间范围内统计奇数数目
 * @param low 
 * @param high 
 * @returns 
 */
function countOdds(low: number, high: number): number {
  if (low % 2 === 0 && high % 2 === 0) {
    return (high - low) / 2;
  }
  return Math.floor((high - low) / 2) + 1;
};
function countOdds1(low: number, high: number): number {
  let count: number = 0

  for (let i = low; i <= high; i++) {
    if (i % 2) count++
  }
  return count
};