type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

/**
 * 根据ID合并两个数组
 */
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let concat: ArrayType[] = [...arr1, ...arr2]

  const map = new Map<number, ArrayType>()
  for (let c of concat) {
    if (map.has(c.id)) {
      map.set(c.id, { ...map.get(c.id), ...c })
      continue
    }
    map.set(c.id, c)
  }

  return [...map.values()].sort((a, b) => a.id - b.id)
}

function join1(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  arr1.sort((a, b) => a.id - b.id)
  arr2.sort((a, b) => a.id - b.id)

  let i: number = 0,
    j: number = 0

  let result: ArrayType[] = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id < arr2[j].id) {
      result.push(arr1[i])
      i++
    } else if (arr1[i].id > arr2[j].id) {
      result.push(arr2[j])
      j++
    } else {
      result.push({ ...arr1[i], ...arr2[j] })
      i++
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

console.log(join1(
  [{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 3, "y": 6 }],
  [{ "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }]
));
