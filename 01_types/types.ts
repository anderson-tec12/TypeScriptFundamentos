//string
const Name: string = 'João'
console.info("STRING", Name)


//Number
let Age: number = 27
console.info("Number", Age)

Age = 27.6
console.info("Broken Number",Age)


//boolean
let haveHobbies:boolean = false
console.info("Boolean",haveHobbies)

//tipos explicitos || any
let myAge: any
myAge = 27
myAge = '27'
console.info("Any", myAge)

//array
let hobbies:string[] = ["Play Guitar", "Write Codes"]
console.info("Array",hobbies)

//tuples
const address: [string, number] = ["Av central", 74]
console.log("Tumples",address)

//enums
enum Color{
  Silver, //0
  Green, //1
  Blue //2
}

let myColor: Color = Color.Blue;
console.info("ENUMS",myColor)

//return from function type string
function returnName():string{
  return Name
}

console.info("Returns a typed value of a function",returnName())

function sayIt():void{
  console.info("Void", 'Info')
}

sayIt()

function multiply(numA: number, numB:number):number{
  return numA * numB
}

console.info("Parameters is typed", multiply(1, 2))

//type function

let calculation: (nA:number, nB:number) => number
calculation = multiply

calculation(10,10)

//Objects
let user: {name:string, age: number} = {
  name: 'Anderson',
  age: 27
}

console.info(user)

//challenge one

/*
  create a functional object with:
    array of strings with the names of the supervisors
    function named dot which should receive an hour and return an astring
    -> normal point (<= 8)
    -> out of hours ( > 8)
*/
const verifyDot = (hours  = 8): string => {
  if(hours > 8){
    return `out of hours ( > 8)`
  }

  return `normal point (<= 8)`
}

const employee: {supervisorsNames: string[], dot: string } = {
  supervisorsNames: ['Ana', 'Carol', 'Felipe', 'Diego'],
  dot: verifyDot(8)
}

console.info(employee)


//ALias
type employee = {supervisorsNames: string[], dot: string }
let employeeTwo:employee = {
  supervisorsNames: ['Ana', 'Carol'],
  dot: verifyDot(9)
}