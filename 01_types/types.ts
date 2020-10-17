//string
const Name: string = 'João'
console.info(Name)


//Number
let Age: number = 27
console.info(Age)

Age = 27.6
console.info(Age)


//boolean
let haveHobbies:boolean = false
console.info(haveHobbies)

//tipos explicitos || any
let myAge: any
myAge = 27
myAge = '27'
console.info(myAge)

//array
let hobbies:string[] = ["Play Guitar", "Write Codes"]
console.info(hobbies)

//tuples
const address: [string, number] = ["Av central", 74]
console.log(address)

//enums
enum Color{
  Silver, //0
  Green, //1
  Blue //2
}

let myColor: Color = Color.Blue;
console.info(myColor)

