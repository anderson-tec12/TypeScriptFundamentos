var Areas;
(function (Areas) {
    var P1 = 3.14;
    function Circunferencia(raio) {
        return P1 * Math.pow(raio, 2);
    }
    Areas.Circunferencia = Circunferencia;
    function Retangulo(base, altura) {
        return base * altura;
    }
    Areas.Retangulo = Retangulo;
})(Areas || (Areas = {}));
console.log(Areas.Circunferencia(10));
console.log(Areas.Retangulo(10, 20));
