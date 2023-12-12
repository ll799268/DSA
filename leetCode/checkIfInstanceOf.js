/**
 * 检查是否是类的对象实例
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || !(classFunction instanceof Function)) return false;
  return Object(obj) instanceof classFunction;
};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/