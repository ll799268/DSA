/**
 * 在既定时间做作业的学生人数
 */
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const n: number = startTime.length

  let i: number = 0
  let result: number = 0

  while (i < n) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) result++
    i++
  }

  return result
};