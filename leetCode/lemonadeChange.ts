/**
 * 柠檬水找零
 */
function lemonadeChange(bills: number[]): boolean {
  let five: number = 0
  let ten: number = 0

  for (let b of bills) {
    if (b === 5) {
      five++
    } else if (b === 10) {
      if (five > 0) {
        five--
        ten++
      } else return false
    } else {
      if (five > 0 && ten > 0) {
        five--
        ten--
      } else if (five > 2) {
        five -= 3
      } else return false
    }
  }

  return true
};