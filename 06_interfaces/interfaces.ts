interface Pessoa{
  nome:string,
  idade?: number,
  [prop:string]:any,
  saudar(nome:string):void
}

function saudarComOla(pessoa:Pessoa){
  console.log('Olá ', pessoa.nome)
}

function mudarNome(pessoa:Pessoa){
  pessoa.nome = 'Anderson 2'
}

const pessoa:Pessoa = {
  nome:"Anderson",
  idade:28,
  saudar(sobrenome:string){
    console.log(this.nome +' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)

saudarComOla(pessoa)
pessoa.saudar('B Silva')
// saudarComOla({nome:'Ander',idade:28, xyx:true})


//Interface função 
interface FuncaoSoma{
  (a:number, b:number):number
}

let potencia: FuncaoSoma

potencia = (base:number, exp:number):number => {
  return Math.pow(base, exp)
}

potencia(3,10)

// Herança
interface A{
  a():void
}

interface B{
  b():void
}

interface ABC extends A,B {
  c():void
}

class REALA implements A {
  a():void {}
}

class REALAB implements A,B {
  a():void {}
  b():void {}
}