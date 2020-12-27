namespace Areas{

  const P1 = 3.14
  
  export function Circunferencia(raio:number):number{
    return P1 * Math.pow(raio, 2)
  }
  
  
  export function Retangulo(base:number, altura:number):number{
    return base * altura
  }
}


console.log(Areas.Circunferencia(10))
console.log(Areas.Retangulo(10, 20))