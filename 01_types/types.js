"use strict";
var Name = 'João';
console.info("STRING", Name);
var Age = 27;
console.info("Number", Age);
Age = 27.6;
console.info("Broken Number", Age);
var haveHobbies = false;
console.info("Boolean", haveHobbies);
var myAge;
myAge = 27;
myAge = '27';
console.info("Any", myAge);
var hobbies = ["Play Guitar", "Write Codes"];
console.info("Array", hobbies);
var address = ["Av central", 74];
console.log("Tumples", address);
var Color;
(function (Color) {
    Color[Color["Silver"] = 0] = "Silver";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.info("ENUMS", myColor);
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
var calculation;
calculation = multiply;
calculation(10, 10);
var user = {
    name: 'Anderson',
    age: 27
};
console.info(user);
var verifyDot = function (hours) {
    if (hours === void 0) { hours = 8; }
    if (hours > 8) {
        return "out of hours ( > 8)";
    }
    return "normal point (<= 8)";
};
var employee = {
    supervisorsNames: ['Ana', 'Carol', 'Felipe', 'Diego'],
    dot: verifyDot(8)
};
console.info(employee);
