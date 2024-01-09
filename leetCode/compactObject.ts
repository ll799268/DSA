type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * 精减对象
 */
function compactObject(obj: Obj): Obj {
  const dfs = (obj: any): any => {
    if (!obj) return false
    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
      const newArr: Obj[] = []

      for (const key in obj) {
        const res: Obj = dfs(obj[key])
        if (res) {
          newArr.push(res)
        }
      }

      return newArr
    }

    const newObj: Obj = {}
    for (const key in obj) {
      const res: Obj = dfs(obj[key])
      if (res) {
        newObj[key] = res
      }
    }

    return newObj
  }

  return dfs(obj)
};