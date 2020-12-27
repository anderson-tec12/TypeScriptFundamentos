"use strict";
//string
const Name = 'João';
console.info("STRING", Name);
//Number
let Age = 27;
console.info("Number", Age);
Age = 27.6;
console.info("Broken Number", Age);
//boolean
let haveHobbies = false;
console.info("Boolean", haveHobbies);
//tipos explicitos || any
let myAge;
myAge = 27;
myAge = '27';
console.info("Any", myAge);
//array
let hobbies = ["Play Guitar", "Write Codes"];
console.info("Array", hobbies);
//tuples
const address = ["Av central", 74];
console.log("Tumples", address);
//enums
var Color;
(function (Color) {
    Color[Color["Silver"] = 0] = "Silver";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
let myColor = Color.Blue;
console.info("ENUMS", myColor);
//return from function type string
function returnName() {
    return Name;
}
console.info("Returns a typed value of a function", returnName());
function sayIt() {
    console.info("Void", 'Info');
}
sayIt();
function multiply(numA, numB) {
    return numA * numB;
}
console.info("Parameters is typed", multiply(1, 2));
//type function
let calculation;
calculation = multiply;
calculation(10, 10);
//Objects
let user = {
    name: 'Anderson',
    age: 27
};
console.info(user);
//challenge one
/*
  create a functional object with:
    array of strings with the names of the supervisors
    function named dot which should receive an hour and return an astring
    -> normal point (<= 8)
    -> out of hours ( > 8)
*/
const verifyDot = (hours = 8) => {
    if (hours > 8) {
        return `out of hours ( > 8)`;
    }
    return `normal point (<= 8)`;
};
const employee = {
    supervisorsNames: ['Ana', 'Carol', 'Felipe', 'Diego'],
    dot: verifyDot(8)
};
console.info(employee);
let employeeTwo = {
    supervisorsNames: ['Ana', 'Carol'],
    dot: verifyDot(9)
};
//Union Types
let note = 10;
console.info(note);
//never
function bug(msg) {
    throw new Error(msg);
}
bug('Erros is defined');
//# sourceMappingURL=types.js.map