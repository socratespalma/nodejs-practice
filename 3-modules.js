// CommonJS
// Modules -> encapsulated code
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alt-flavor");
require("./7-mind-grenade");

console.log(data);

sayHi("susan");
sayHi(peter);
sayHi(john);
