const user = {
    username : "Amar",
    price : 99,

    welcome : function ()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//user.welcome()// globle object is  window
//user.username=" sam"
//user.welcome()

//console.log(this)

/*function chai() {
    let username = "Amar"
    console.log(this.username);
}*/

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// arrow function

/*const addtwo= (n1, n2) =>{

    return n1+n2        --> agar curly braces mein likha to return keyword likhna padega

}*/

//const addTwo = (n1, n2)  => n1 + n2  ---> emplicit return type

//const addTwo = (n1, n2)  => (n1 + n2 )  // ---> mostly used in react this defination

//const addTwo = (n1, n2)  => ({username: "Amar"})   // --> object return in parenthesis

console.log(addTwo(3,4))
