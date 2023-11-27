// Q 1. write a java script program to find wheater a person age lies between 10 and 20?
let age=10
if (age<=20 && age >=10){
    console.log("person age lies between 10 and 20", "age is:",age)
}
else{
    console.log("person age not lies between 10 and  20:", age)
}

//Q 2 demostrate a use of switch case statement

let day='sunday'
switch(day){
    case 'sunday':{
        console.log("Hey hi today is sunday :)")
    }
    break;
    case 'monday': {
        console.log("Hey hi today is monday; \n happy Working")
    }
    break;
    default:{
        console.log("Entered invalid input")
    }
}

//Q3 Write a javascript program to find whether a numbe divisible by 2 and 3
number=6
if(number%2==0 && number%3==0){
    console.log("entered number", number,"is divisible by 2 and 3")
}
else{
    console.log("entered number :",number," is not divisible by 2 and 3")
}

//Q4 Write a javascript program to find whether a number divisible by 2 or ither 3
number=21
if(number%2==0 || number%3==0){
    console.log("entered number", number,"is divisible by 2 or 3")
}
else{
    console.log("entered number :",number," is not divisible by 2 or 3")
}

//Q5 Print "you can drive " or " you can not dirve" based on user age greate then 18 or less than 18

console.log("you can ",age > 18? " Drive":"not Drive")