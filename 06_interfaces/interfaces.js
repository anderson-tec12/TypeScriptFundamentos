function saudarComOla(pessoa) {
    console.log('Olá ', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Anderson 2';
}
var pessoa = {
    nome: "Anderson",
    idade: 28,
    saudar: function (sobrenome) {
        console.log(this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('B Silva');
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
potencia(3, 10);
var REALA = /** @class */ (function () {
    function REALA() {
    }
    REALA.prototype.a = function () { };
    return REALA;
}());
var REALAB = /** @class */ (function () {
    function REALAB() {
    }
    REALAB.prototype.a = function () { };
    REALAB.prototype.b = function () { };
    return REALAB;
}());
