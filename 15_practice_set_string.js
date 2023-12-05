/*
Q1. What will the following print in Javascript?
        console.log("har\"".length)
Q2. Explore the includes, statrt with & ends with function of a string

Q3. Whrite a Program to convert a given string to lowercase

Q4. Extract the amount out of this string
        "Plese give RS 1000"

Q5 Try to chang 4th charactor of a given string where you able to do it?
*/

//Q1.
console.log("\n Question 1 output \n")

console.log("harry\"s".length, "harry\"s")      // Length is 7

//Q2
console.log("\n Question 2 output \n")

let str ="What is your age"
let word="age"
console.log("This word",word,str.includes(word)? "present": "not present","in sting")

let start="What"
console.log(str.startsWith(start))
console.log(`The string ${str.startsWith(start)? 'is start' : 'is not start'} with ${start}`)

let end="What"
console.log(str.endsWith(end))
console.log(`The string ${str.endsWith(end)? 'is end' : 'is not end'} with ${end}`)

//Q3
console.log("\n Question 3 output \n")
let srtl="NAME IS KIRAN"
console.log("after converting result is: ",srtl.toLowerCase)

//Q4
console.log("\n Question 4 output \n")
let str2="Please give Rs 1000"
let amount=parseInt(str2.slice(14))
console.log(amount,typeof(amount))


//Q5
console.log("\n Question 5 output \n")
let str3="Rajesh"
str3[3]= 'm'
console.log(str3)