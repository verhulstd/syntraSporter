class Square {
  #size; //number
  #color;
  constructor(s, c) {
    this.#size = s;
    this.#color = c;
  }
  get size() {
    return this.#size + "m"; // string
  }
  set size(str) {
    //string
    this.#size = parseInt(str.slice(0, -1));
  }
}

const mySquare = new Square(10, "red");
mySquare.size = "55m";
console.log(mySquare.size); // "10m"
