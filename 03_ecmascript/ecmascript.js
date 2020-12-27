var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _this = this;
// let & const
var seraQuePode = '?'; // hoisting tipico do var
console.log(seraQuePode);
// var seraQuePode = '?' // hoisting tipico do var
var estaFrio = true;
if (estaFrio) {
    var acao = "Colocar um casaco"; // hoisting
    //  let acao = "Colocar um casaco" 
}
console.log(acao);
var cpf = '123.456.789-99';
console.log(cpf);
function revelar() {
    var segredo = 'Segredo revelado';
    console.log(segredo);
}
revelar();
// mesmo do tipo var não é encontrado se for declaro no bloco de uma função
// console.log(segredo)
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(i);
// Arrow function
var somar = function (n1, n2) {
    return n1 + n2;
};
var subtrair = function (n1, n2) { return n1 - n2; };
var saudacao = function (_a) {
    var age = _a.age, name = _a.name;
    return "Ol\u00E1 eu me chamo  " + name + ", tenho " + age + " anos";
};
somar(2, 2);
console.log(subtrair(somar(2, 2), 3));
console.log(saudacao({ age: 28, name: 'Anderson B Silva' }));
function funcaoComThis() {
    console.log('THIS NORMAL', this);
}
var funcaoComThisArrow = function () {
    console.log('THIS Arraw', _this);
};
funcaoComThis();
funcaoComThisArrow();
function contagemRegressiva(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log('Iniciando ', inicio);
}
contagemRegressiva();
// Rest & Spread
var numbers = [1, 10, 99, -5];
console.log('Maior Numero', Math.max.apply(Math, numbers)); //Spread
// Rest
function retonarArray(arg1, arg2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __spreadArrays([arg1, arg2], args);
}
console.log(retonarArray(20, 30, 40, 50, 60, 70, 80, 90, 100));
// REST, SPREAD (Tupla)
var Tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(a, b, c);
}
tuplaParam1.apply(void 0, Tupla);
function tuplaParam2() {
    var paramns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paramns[_i] = arguments[_i];
    }
    console.log.apply(console, paramns);
}
tuplaParam2.apply(void 0, Tupla);
