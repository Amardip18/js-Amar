// for of

//["", "", ""]
//[{}, {},{}]

/*const arr = [1, 2, 3, 4, 5]

for (const num of arr)
{
    console.log(num);
}

const greeting = " Heloo world"
for (const greet of greeting)
{
    console.log(`Each char is ${greet}`)
}
*/
// map store unique value

const mmm = new Map()  
mmm.set('IN', "India")
mmm.set('USA', "United States of America")
mmm.set('Fr', "France")
mmm.set('IN', "India")

console.log(mmm); 

/*for (const [key, value] of mmm) {
     console.log(key, ':-', value);
}*/

const myObject = {   // ---> Object is not iterable in (for of) loop 
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}