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
