const user = {
    username : "Amar",
    price : 99,

    welcome : function ()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
console.log(this);
