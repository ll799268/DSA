/**
 * 训练计划I
 */
function trainingPlan(actions: number[]): number[] {
  return [...actions.filter(item => item % 2 === 1), ...actions.filter(item => item % 2 === 0)]
};

function trainingPlan1(actions: number[]): number[] {
  return actions.sort((a, b) => b % 2 - a % 2)
};

// 快慢指针
function trainingPlan2(actions: number[]): number[] {
  let slowIdx: number = 0
  for (let fastIdx = 0; fastIdx < actions.length; fastIdx++) {
    if (actions[fastIdx] % 2 === 1) {
      [actions[slowIdx], actions[fastIdx]] = [actions[fastIdx], actions[slowIdx]]
      slowIdx++
    }
  }

  return actions
}

// 前后指针
function trainingPlan3(actions: number[]): number[] {
  let l: number = 0,
    r: number = actions.length - 1

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