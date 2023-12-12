/**
 * 睡眠函数
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  return new Promise(resolve => setTimeout(() => resolve(), millis))
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/