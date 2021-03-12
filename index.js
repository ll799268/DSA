/** 
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var arr = []
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j)
        return arr
      }
    }
  }
  return arr
};

/**
 * 两数之和
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
var addTwoNumbers = function (l1, l2) {
  if (l1.length === l2.length) {
    var arr = []
    for (var i = 0; i < l1.length; i++) {
      var item1 = l1[i],
        item2 = l2[i],
        sum = item1 + item2

      arr[i] === 1 ? '' : arr[i] = 0

      if (sum >= 10) {
        i === l1.length ? '' :  arr[i + 1] = 1
      } else {
        arr[i] += sum
      }
      
    }
    
    return arr.reverse()
  } else {
    var l1Number = parseInt(l1.join(',').replace(/\,/g, '')),
      l2Number = parseInt(l2.join(',').replace(/\,/g, '')),
      result = (l1Number + l2Number).toString()
                                    .split('')
                                    .map(item => +item)
                                    .reverse()

    return result
  }

};