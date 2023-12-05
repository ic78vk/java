//Function
//syntax
/*function function_name(parameter1,parameter2,...){
    return opration=parameter1+parameter2;
}

function_name(12,34)
console.log(function_name(12,34) ===12+34=48
*/

function avg(a,b,c,d){
    return (a+b+c+d)/4;
}
arr=[25,68,95,85]
console.log(avg(25,95,85,45))

//Arrow function

const sum=(p,q) =>{
    console.log("this is an output of arrow function")
    return p+q;
}

let y=sum(85,23);
console.log("sum is:",sum(850,23),y)

//experiment

function crate_arr(a,b,c,d,e){
    console.log("this is and experimental function")
    return arr=[a,b,c,d,e];
}
let a=33
let b=23
let c=53
let d=64
let e=98
console.log("new arr is", crate_arr(a,b,c,d,e))
console.log("new2 arr is ", crate_arr(95,69,88,59,55))

