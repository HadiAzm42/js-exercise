// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

let cars = new Object();

function make_car(...args) {
  if (args.length == 2) {
    cars = { ...args[0], ...args[1] };
    console.log("\nIf two arguments are received, then the car object will be:");
    console.log(cars);
  } else {
    cars = { ...args[0], ...args[1], ...args[2], ...args[3] };
    console.log("\nIf four arguments are received, then the car object will be:");
    console.log(cars);
  }
}

let a = { manufacturer: "Audi" };
let b = { model: "BMW" };
let c = { color: "Supra" };
let d = { drive: "GTR" };

make_car(a, b);
make_car(a, b, c, d);