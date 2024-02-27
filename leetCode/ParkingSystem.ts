/**
 * 设计停车系统
 */
class ParkingSystem {
  private map: Map<number, number>

  constructor(big: number, medium: number, small: number) {
    this.map = new Map([
      [1, big], 
      [2, medium], 
      [3, small]
    ])
  }

  addCar(carType: number): boolean {
    const num = this.map.get(carType)
    this.map.set(carType, num - 1)
    return num > 0
  }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/