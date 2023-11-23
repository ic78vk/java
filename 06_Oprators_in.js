//  Arithmatic 
let a=12
let b=43
console.log("addition of a+b:", a+b)
console.log("subtraction of a-b:", a-b)
console.log("multiplication of a*b:", a*b)
console.log("devision of a/b:", a/b)
console.log("increement  of a++:", a++)
console.log("increement of a++ is:",a)
console.log("increement of ++a is:", ++a)

//Assingment oprators
let c=12
// c=43
console.log("assingment op equal to '=':", c=22)
console.log("assingment op += :", c +=5)        // initially c=22 and after += 5 now c is 22+5=27
console.log("assingment op -=:", c -=10)        // initially c=27 and after -= 10 now c is 27-10=17
console.log("assingment op *=:", c *=2)        // initially c=27 and after *= 2 now c is 17*2=34

// Comparison operator: =, ==, !=, ===, !==
let com1 =6
let com2 =7
let com3 ="6"

console.log("comparison of  com1===com2 is:", com1===com2)
console.log("comparison of  com1===com3 is:", com1===com3)      // === compaired varibale based on its type i.e string , number etc
console.log("comparison of com1!==com2 is:", com1!==com2)
console.log("comparison of com1!==com3 is:", com1!==com3)       // !== comparied vaibale bases of not equal type i.e string !== number = true

// Logical oparators &&, ||, !

let l1= 44
let l2= 45

console.log("logical l1>0 and l2<2 is: ", l1>0 && l2<2)     // && return true only if both side condition is true
console.log("logical l1>22 || l2<4 is:", l1>22 || l2<4)     // || return false only if both side conditionis false
console.log ("logical ! is:", !true)                        // changing true to false and false to true

// Comments 

// this is a single line comment
/* this is 
a multi
line comment*/