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

sporter2.train("cycling", 22, 50);
sporter2.train("running", 10, 60);

sporter3.train("cycling", 20, 45);

console.log(sporter1.getTotalDistance());
console.log(sporter2.getTotalDistance());
console.log(sporter3.getTotalDistance());
