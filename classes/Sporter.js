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
  getTotalLogs() {
    return this.#list.length;
  }
  getAvg(property, sport) {
    return (
      this.getTotal(property, sport) /
      this.#list.filter((log) => log.sport === sport).length
    );
  }

  getLog(sport, sortType, property) {
    return Math[sortType](
      ...this.#list
        .filter((logObject) => logObject.sport === sport)
        .map((log) => log[property])
    );
    // const filteredLogs = this.#list.filter(
    //   (logObject) => logObject.sport === sport
    // );
    // return filteredLogs.sort((a, b) => {
    //   return a[property] - b[property];
    // })[sortType === "min" ? 0 : filteredLogs.length - 1];
  }
  get name() {
    return this.#name;
  }
  get list() {
    return this.#list;
  }
  static getMostLogs(sporters) {
    return sporters
      .map((sporter) => {
        return {
          name: sporter.name,
          totalLogs: sporter.getTotalLogs(),
        };
      })
      .sort((a, b) => b.totalLogs - a.totalLogs)[0].name;
  }
}

export default Sporter;

// const getallen = [4,8,12,6]
// getallen.sort((a,b)=>{return a-b})

// person = {
//   name : "David",
//   age : 42,
//   test : function(){}
// }

// person["test"]()
