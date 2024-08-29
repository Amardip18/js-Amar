// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "amardeep.com",
    age : 18,
    location : "jupitar",
   [ mySym ]: "mykey1",
    email: "amardeep@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Momday", "saturday"]


}
 // To access element of the object, either we can use [] or dot(.)
  console.log(JsUser.email)
  console.log(JsUser["email"])
  console.log(JsUser.email)
  console.log(JsUser[mySym])

  JsUser.email= "ttttttttt"
  //Object.freeze(JsUser);
  JsUser.email = "oooahsdhfhsabfb"
  console.log(JsUser);
 

  JsUser.greeting= function () {
         console.log("Hello js user");
  }

  JsUser.greetingTwo= function () {
    console.log(`Hello js user, ${this.name}`);
}

  console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());