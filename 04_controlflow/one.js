const isUserloggedIn = true
const temperature = 41

/*f(temperature === 41)
{
    console.log("less than 50");
}
else{
    console.log("Temperature is greater than 50");
}*

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 201

if (score > 200)
{
    let power = "fly"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`);*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2!==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}