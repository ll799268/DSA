/**
 * 设计停车系统
 */
class ParkingSystem {
  private map: Map<number, number>

  constructor(big: number, medium: number, small: number) {
    this.map = new Map()
    this.map.set(1, big)
    this.map.set(2, medium)
    this.map.set(3, small)
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