"use strict";
///<reference path="testeDeReferencia.ts" />
var Dev;
(function (Dev) {
    let Areas;
    (function (Areas) {
        const P1 = 3.14;
        function Circunferencia(raio) {
            return P1 * Math.pow(raio, 2);
        }
        Areas.Circunferencia = Circunferencia;
        function Retangulo(base, altura) {
            return base * altura;
        }
        Areas.Retangulo = Retangulo;
    })(Areas = Dev.Areas || (Dev.Areas = {}));
})(Dev || (Dev = {}));
const { Circunferencia, Retangulo } = Dev.Areas;
console.log(Dev.Areas.Circunferencia(10));
OPS();
console.log(Dev.Areas.Retangulo(10, 20));
//# sourceMappingURL=namespace.js.map