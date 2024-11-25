const User = {
    _email: 'am@.com',
    _password: "abc",

    get email() {
        return this._email.toNumber()
    },

    set email (value){
        this._email =value
    }
}

const tea = Object.create (User)
console.log(tea.email);