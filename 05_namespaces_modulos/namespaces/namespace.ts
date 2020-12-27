///<reference path="testeDeReferencia.ts" />

namespace Dev{
  export namespace Areas{

    const P1 = 3.14
    
    export function Circunferencia(raio:number):number{
      return P1 * Math.pow(raio, 2)
    }
    
    
    export function Retangulo(base:number, altura:number):number{
      return base * altura
    }
  }
}

const {Circunferencia,Retangulo} = Dev.Areas

console.log(Dev.Areas.Circunferencia(10))
OPS()
console.log(Dev.Areas.Retangulo(10, 20))