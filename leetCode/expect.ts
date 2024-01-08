/**
 * 相等还是不相等
 */
type ToBeOrNotToBe = {
  toBe: (val: number) => boolean;
  notToBe: (val: number) => boolean;
};

function expect(val: number): ToBeOrNotToBe {
  this.toBe = (propVal: number): boolean | Error => {
    if (val === propVal) return true
    throw new Error('Not Equal')
  }
  this.notToBe = (propVal: number): boolean | Error => {
    if (val !== propVal) return true
    throw new Error('Equal')
  }

  return this
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/