// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "amardeep.com",
    age : 18,
    location : "jupitar",
    mySym : "mykey1",
    email: "amardeep@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Momday", "saturday"]


}
 // To access element of the object, either we can use [] or dot(.)
  console.log(JsUser.email)
  console.log(JsUser["email"])
  console.log(JsUser.email)
  console.log(typeof JsUser.mySym)
 