/**
 * 找出井字棋的获胜者
 */
function tictactoe(moves: number[][]): string {
  const arr: string[][] = [['', '', ''], ['', '', ''], ['', '', '']]
  // 塞入棋盘下棋位置
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i]
    arr[x][y] = i % 2 === 0 ? 'A' : 'B'
  }

  // 判断横竖位置
  for (let i = 0; i < 3; i++) {
    const [a, b, c] = arr[i]
    const [d, e, f] = [arr[0][i], arr[1][i], arr[2][i]]
    if (a && a === b && b === c) return a
    if (d && d === e && e === f) return d
  }

  // 判断对角线
  const [a, b, c]: string[] = [arr[0][0], arr[1][1], arr[2][2]]
  if (a && a === b && b === c) return a
  const [d, e, f]: string[] = [arr[0][2], arr[1][1], arr[2][0]]
  if (d && d === e && e === f) return d

  if (moves.length < 9) return 'Pending'
  return 'Draw'
};

console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]));
