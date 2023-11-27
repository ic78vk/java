// If , if else, if-else if-else

// 1. IF statemenet
let a=22
if(a>23){
    console.log("this is a valid age to marry")
}

//  2. If else statement

let b =12
if(b<18){
    console.log("thsi was not a valiad age to drive")
}
else{
    console.log("this was valid age for drive")
}

// 3. IF-else if-else

let c=15
if(c<10){
    console.log("you able no able to drive")
}
else if(c>10 || c<18){
    console.log("your are is valid for drive but you can think to drive")
}
else{
    console.log("you can drive")
}

// switch statement//
let value=1
switch(value){
    case 1: {
        console.log("you have won a car")
    }
    break;
    case 2: {
        console.log("you have wan a bike")
    }
    break;
    case 3: {
        console.log("you hav won a Home")
    }
    break;
    default:{
        console.log("Sorry!, better luck for next time")
    }
}


//Ternarry Operator//
// sysn: condition? ext 1 : exp 2
console.log("Ternery operator")

age=12
console.log("You",age>18? "Can Drive" : "Not Drive")