// total 2 types of datatype present in javascript
// 1. Primative
// 2. non Primative (Object)
// 
// Primative 
// in primative data type there are total 7 type( NN BB SS U)
// 1. null
// 2. number
// 3. string
// 4. symbole
// 5. boolean
// 6. BigInt
// 7.undefine

let a =null
let b = 444
let c = true
let d = BigInt("548")
let e = "Rahul"
let f = Symbol("i am a nice symbol")
let g = undefined

// non Primative data type OBJECT

const user = {
    name : 'rahul',
    user_id : 1,
    mobile : 8454887,
    age :25,
    addr : "112/34, rahul navigator, cidco, n2",
    pin: 425512,
    mail_id :'rahul22@gmail.com'
}
console.log(user)
console.log(typeof(user.user_id))