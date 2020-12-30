function echo(objeto) {
    return objeto;
}
console.log(echo('Anderson').length);
console.log(echo(28).length);
console.log(echo({ nome: 'anderson' }));
function echoMelhorada(objeto) {
    return objeto;
}
console.log(echoMelhorada('Anderson').length);
// console.log(echoMelhorada(28).length)
console.log(echoMelhorada(28));
console.log(echoMelhorada({ nome: 'anderson' }));
// Genercis disponiveis na API 
var avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.8);
// avaliacoes.push('5.5')
console.log(avaliacoes);
