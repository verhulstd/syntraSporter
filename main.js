//import "./style.scss";

import Sporter from "./classes/Sporter.js";

const sporter1 = new Sporter("David", 42);
const sporter2 = new Sporter("Erlend", 53);
const sporter3 = new Sporter("Kristien", 30);

sporter1.train("swimming", 1, 60);
sporter1.train("swimming", 2, 110);
sporter1.train("cycling", 20, 45);
sporter1.train("cycling", 22, 50);
sporter1.train("running", 10, 60);
sporter1.train("running", 20, 120);
sporter1.train("running", 20, 120);
sporter1.train("running", 10, 60);

sporter2.train("cycling", 22, 50);
sporter2.train("running", 10, 60);

sporter3.train("cycling", 20, 45);
sporter3.train("cycling", 20, 45);

// console.log(sporter1.getTotal());
//console.log(sporter1.getTotal("duration")); // 55
// console.log(sporter1.getTotal("distance", "swimming")); // 3
// console.log(sporter1.getTotal("distance", "cycling")); // 42
// console.log(sporter1.getTotal("distance", "running")); // 10

// console.log(sporter1.getTotal("duration")); // 325
// console.log(sporter1.getTotal("duration", "swimming")); // 170
// console.log(sporter1.getTotal("duration", "cycling")); // 95
// console.log(sporter1.getTotal("duration", "running")); // 60

console.log(sporter1.getAvg("distance", "running"));
console.log(sporter1.getAvg("duration", "running"));
console.log(sporter1.getAvg("distance", "cycling"));
console.log(sporter1.getAvg("duration", "cycling"));
console.log(sporter1.getAvg("distance", "swimming"));
console.log(sporter1.getAvg("duration", "swimming"));
