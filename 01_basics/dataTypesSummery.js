// Primitive

// 7 types : String , Number, Boolean, null, undefined,Symbol,BigInt

const score= 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId= Symbol('123')

//console.log(id===anotherId);

const bigNumber = 3333333344555n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
    name : "Amar",
    age : 22,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);