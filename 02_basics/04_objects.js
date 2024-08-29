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
console.log(regularUser.fullname.userfullname);