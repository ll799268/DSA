
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

/**
 * 判断对象是否为空
 */
function isEmpty(obj: Obj): boolean {
  return !Object.keys(obj).length
};
function isEmpty1(obj: Obj): boolean {
  for (const _ in obj) return false;
  return true;
};