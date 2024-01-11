/**
 * 螺旋遍历二维数组
 */
function spiralArray(array: number[][]): number[] {
  if (!array.length || !array[0].length) {
    return []
  }
  const res: number[] = []
  let left: number = 0
  let right: number = array[0].length - 1
  let bottom: number = 0
  let top: number = array.length - 1
  let direction: 'left' | 'right' | 'down' | 'up' = 'right'
  while (left <= right && bottom <= top) {
    switch (direction) {
      case 'right': {
        let row = bottom
        let col = left
        while (col <= right) {
          res.push(array[row][col])
          col++
        }
        bottom++
        direction = 'down'
        break
      }
      case 'down': {
        let row = bottom
        let col = right
        while (row <= top) {
          res.push(array[row][col])
          row++
        }
        right--
        direction = 'left'
        break
      }
      case 'left': {
        let row = top
        let col = right
        while (col >= left) {
          res.push(array[row][col])
          col--
        }
        top--
        direction = 'up'
        break
      }
      case 'up': {
        let row = top
        let col = left
        while (row >= bottom) {
          res.push(array[row][col])
          row--
        }
        left++
        direction = 'right'
        break
      }
      default:
        break
    }
  }
  return res

};

console.log(spiralArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
