/**
 * 两个promise相加
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const result = await Promise.all([promise1, promise2])
  return new Promise((resolve) => {
    resolve(result.reduce((c, p) => c + p))
  })
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/