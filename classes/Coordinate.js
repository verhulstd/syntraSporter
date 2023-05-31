class Coordinate {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }
  get x() {
    return this.#x;
  }
  get y() {
    return this.#y;
  }
  set x(val) {
    this.#x = val;
  }
  set y(val) {
    this.#y = val;
  }
  static calcDistance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}

const punt1 = new Coordinate(0, 0);
const punt2 = new Coordinate(0, 2);

console.log(Coordinate.calcDistance(punt1, punt2));
