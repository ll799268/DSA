/**
 * 日期间隔几天
 */
function daysBetweenDates(date1: string, date2: string): number {
  const diff: number = new Date(date1).getTime() - new Date(date2).getTime()
  return Math.abs(diff / 1000 / 60 / 60 / 24);
};