// Q.1 Create a varibale of type string and try to add a number to it
// Q.2 Use type of operator to fing the data type of string in last question (Q1)
// Create a const objecct in javacript ; can you chnage it to hold a number later?
// Q.4 Try to add a new key to the const object in problem 3 (Q3) wew you able ot do it?
// Q.5 Write a js program to create a wrod meaning dictionary of 5 words

//Q1
let a = "winx"
let b = 33
let c =a +b
console.log(c)

//Q2 
console.log("Data type of Q1 Result is:",typeof(c))

// Q3
const a1 ={
    name : "Rahul",
    Age : 22
}
console.log(a1)
// a1=44
// console.log(a1)
// ANS: not able to assing number after const is created ones

// Q4

a1['Mobile']=856584
console.log('After new key "Mobile" added;',a1)

// Q5
const dict = {
    toothsome : "pleasing to the taste; palatable",
    finagle : "to get or achieve something by guile, trickery, or manipulation.",
    bombastic : "high-sounding; high-flown; pretentious.",
    wakame  : "dried for use in soups, salads, and side dishes.",
    verdure  : "green vegetation, especially grass or herbage."
}
console.log("means of word:", dict.bombastic)