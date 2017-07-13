var mathModule = require('./math_module')();

console.log("sum:");
console.log(mathModule.add(2,3));
console.log("multiply:");
console.log(mathModule.multiply(2,3));
console.log("square:");
console.log(mathModule.square(5));
console.log("random:");
console.log(mathModule.random(55,134));
