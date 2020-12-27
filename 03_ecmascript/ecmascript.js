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
