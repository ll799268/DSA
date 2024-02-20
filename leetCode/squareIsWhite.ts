/**
 * 判断国际象棋棋盘中一个格子的颜色
 */
function squareIsWhite(coordinates: string): boolean {
  const c1: number = coordinates[0].charCodeAt(0)
  const c2: number = +coordinates[1]

  return c1 % 2 !== c2 % 2
};
