const tinder = new Object() // singleton objects

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Amar",
            lastname : "Kumar"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3= {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));// access keys of objects
console.log(Object.values(tinderUser)); // access values of Objects
console.log(Object.entries(tinderUser)); // retunr in the form of array and as a nested array

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));

