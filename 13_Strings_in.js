//Strings
/*
name= 'ravi'
name= "Ravi"
*/
console.log("\n this is a output of strings\n")
let name ="Ravi"
let name1 ='shubhma'
console.log(name[0])
console.log(`name is ${name}`)

// Templete litrals
console.log("\nfollowing is the output of templete litrals\n")
let name2=`Anil`
let friend2='lokesh'

console.log("This is op of litrals",name2)
console.log(`${name2} and ${friend2} is a very good frineds`)

//Escape sequence charactor
//using is we can add ' or " in inbiween of string i.e let name= 'friuts\'s'
let escape='fruit\'s'
console.log("this is op after add escape seq char: ",escape +"this is the lenght of variable", escape.length)

//Some more escape sequence charactor
/*
\n --> new line
\t --> tab
\r --> carring return
*/
console.log("\n\nThis is use of \n escape sequence charactor")
console.log("\n\nThis is use of \t escape sequence charactor")
console.log("\n\nThis is use of \r escape sequence charactor")

/*
const sum=(a,b)=>{
    console.log(`sum of ${a} and ${b} is `,a+b)
    return a+b;
}
let c=sum(23,54)
console.log(c)
const dir={
    name: 'rahul',
    age: 85,
    mobile: 9945485454,
    email: 'rahul23@gmail.com'
}
for(i in dir){
    console.log(`${i} is a ${dir[i]}`)
}
for(i=0;i<Object.keys(dir).length;i++){
    console.log(`\r${Object.keys(dir)[i]} is a ${Object.values(dir)[i]}`)
}
*/