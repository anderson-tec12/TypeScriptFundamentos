// let & const
let seraQuePode = '?' // hoisting tipico do var
console.log(seraQuePode) 
// var seraQuePode = '?' // hoisting tipico do var

let estaFrio = true
if(estaFrio){
  var acao = "Colocar um casaco"// hoisting
//  let acao = "Colocar um casaco" 
}

console.log(acao)

const cpf:string = '123.456.789-99';

console.log(cpf)

function revelar(){
  var segredo = 'Segredo revelado'
  console.log(segredo)
}

revelar()
// mesmo do tipo var não é encontrado se for declaro no bloco de uma função
// console.log(segredo)

for(var i = 0 ; i <= 10; i ++){
  console.log(i)
}

console.log(i)

// Arrow function
const somar = (n1: number, n2:number):number => {
  return n1 + n2
}

const subtrair = (n1: number, n2:number):number =>  n1 - n2

const saudacao = ({age, name}:{name:string, age:number}):string  => {
  return `Olá eu me chamo  ${name}, tenho ${age} anos`
}

somar(2,2)
console.log(subtrair(somar(2,2), 3))
console.log(saudacao({age:28,name:'Anderson B Silva'}))

function funcaoComThis(){
  console.log('THIS NORMAL', this)
}

 const funcaoComThisArrow = () => {
  console.log('THIS Arraw', this)
}

funcaoComThis()
funcaoComThisArrow()

function contagemRegressiva(inicio:number = 3 ):void {
  console.log('Iniciando ', inicio)
}

contagemRegressiva()