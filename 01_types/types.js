"use strict";
//string
var Name = 'João';
console.info(Name);
//Number
var Age = 27;
console.info(Age);
Age = 27.6;
console.info(Age);
//boolean
var haveHobbies = false;
console.info(haveHobbies);
//tipos explicitos || any
var myAge;
myAge = 27;
myAge = '27';
console.info(myAge);
//array
var hobbies = ["Play Guitar", "Write Codes"];
console.info(hobbies);
//tuples
var address = ["Av central", 74];
console.log(address);
//enums
var Color;
(function (Color) {
    Color[Color["Silver"] = 0] = "Silver";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.info(myColor);
