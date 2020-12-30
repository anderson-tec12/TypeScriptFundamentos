@logarClass
class Eletrodomestico{
  constructor(){
    console.log('Novo...')
  }
}

function logarClass(contructor:Function){
  console.log(contructor)
}

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()
