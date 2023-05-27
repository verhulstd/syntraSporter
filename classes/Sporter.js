import Log from "./Log.js";

class Sporter {
  #name;
  #age;
  #list;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    this.#list = [];
  }
  train(sport, distance, duration) {
    if (arguments.length != 3) {
      throw "train() method requires 3 parameters";
    }
    this.#list.push(new Log(sport, distance, duration));
  }

  getTotal = (property, sport = "") => {
    if (!property)
      throw "getTotal accepts 2 parameters. first parameter 'property' is required as a string.";
    if (typeof property != "string")
      throw "given parameter 'property' should be a string";
    // if (!["distance", "duration"].contains(property))
    //   throw "given parameter 'property' is unknown";
    // checking on prototype is more dynamic
    if (!Object.getPrototypeOf(new Log()).hasOwnProperty(property)) {
      throw "given parameter 'property' is unknown";
    }

    return this.#list
      .filter((log) => (sport ? log.sport === sport : true))
      .reduce((acc, log) => acc + log[property], 0);
  };

  getAvg(property, sport) {
    return (
      this.getTotal(property, sport) /
      this.#list.filter((log) => log.sport === sport).length
    );
  }

  get list() {
    return this.#list;
  }
}

export default Sporter;
