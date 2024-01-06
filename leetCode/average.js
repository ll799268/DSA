/**
 * 去掉最低工资和最高工资后的工资平均值
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let max = Math.max(...salary)
  let min = Math.min(...salary)
  salary = salary.filter(item => item !== min && item !== max)

  return salary.reduce((pre, cur) => pre + cur) / salary.length
};

var average = function (salary) {
  salary.sort((a, b) => a - b)
  const sum = salary.reduce((pre, cur) => pre + cur)

  return sum - salary[0] - salary[salary.length - 1] / salary.length - 2
};

var average = function (salary) {
  salary.sort((a, b) => a - b)
  salary.pop()
  salary.shift()

  return salary.reduce((pre, cur) => pre + cur) / salary.length
};