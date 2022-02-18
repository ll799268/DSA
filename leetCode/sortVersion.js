/**
 * 版本号排序
 * @param {*} versions 
 */

var sortVersion = function (versions) {
  const temp = versions.map(v => v.split('.'))
  for (let i = 0; i < temp.length; i++) {
    let minIndex = i;
    for (let j = i; j < temp.length; j++) {
      for (let k = 0; k < temp[j].length; k++) {
        const current = +temp[j][k],
          min = +temp[minIndex][k];
        if (current < min) {
          minIndex = j;
        }
        // 只要不等，就立刻结束最内层遍历！
        if (current !== min) {
          break
        }
      }
    }
    [temp[i], temp[minIndex]] = [temp[minIndex], temp[i]];
  }
  return temp.map(v => v.join('.'))
}


var sortVersion = function (versions) {
  versions.sort((a, b) => {
    const itemA = a.split('.'),
      itemB = b.split('.'),
      leg = Math.max(itemA.length, itemB.length)

    let val = 0

    for (let i = 0; i < leg; i++) {
      const curryA = itemA[i],
        curryB = itemB[i]

      if (typeof curryA === 'undefined') {
        val = -1
        break
      } else if (typeof curryB === 'undefined') {
        val = 1
        break
      } else {
        if (curryA === curryB) {
          continue
        }
        val = Number(curryA) - Number(curryB)
        break
      }
    }
    return val
  })

  return versions
}

sortVersion(['1.1', '2.3.3', '4.3.5', '0.3.1', '0.302.1', '4.20.0', '4.3.5.1', '1.2.3.4.5'])

// console.log(sortVersion(['1.1', '2.3.3', '4.3.5', '0.3.1', '0.302.1', '4.20.0', '4.3.5.1', '1.2.3.4.5']));