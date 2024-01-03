/**
 * 训练计划I
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
  return [...actions.filter(item => item % 2 === 1), ...actions.filter(item => item % 2 === 0)]
};

var trainingPlan = function (actions) {
  return actions.sort((a, b) => b % 2 - a % 2)
};

// 快慢指针
var trainingPlan = function (actions) {
  let slowIdx = 0
  for (let fastIdx = 0; fastIdx < actions.length; fastIdx++) {
    if (actions[fastIdx] % 2 === 1) {
      [actions[slowIdx], actions[fastIdx]] = [actions[fastIdx], actions[slowIdx]]
      slowIdx++
    }
  }

  return actions
}

// 前后指针
var trainingPlan = function (actions) {
  let l = 0,
    r = actions.length - 1

  while (l < r) {
    if (actions[l] % 2 === 1) {
      l++
    } else if (actions[r] % 2 === 0) {
      r--
    } else {
      [actions[l], actions[r]] = [actions[r], actions[l]]
      l++
      r--
    }
  }

  return actions
}

console.log(trainingPlan([1, 2, 3, 4, 5]));