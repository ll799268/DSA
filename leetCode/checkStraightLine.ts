/**
 * 缀点成线
 */
function checkStraightLine(coordinates: number[][]): boolean {
  const [x0, y0]: number[] = coordinates[0]
  const [x1, y1]: number[] = coordinates[1]

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi]: number[] = coordinates[i]
    // 将斜率转为 移项，避开除数为0  (x1-x0)/(y1-y0) = (xi-x0)/(yi-y0)
    const temp1: number = (x1 - x0) * (yi - y0)
    const temp2: number = (xi - x0) * (y1 - y0)
    if (temp1 !== temp2) return false
  }

  return true
};
