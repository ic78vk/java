/*
Q1 Write a program to pront the marks of a student in an object using for loop
Q2. Write a program in Q1 using for in loop
Q3. Write a program to print ' try again ' until the user enters the correct number
Q4. Write a function to find mean of 5 numbers
*/
//Question 1

const marks={
    rahul :25,
    ravi: 59,
    anil: 36,
    shivam: 69
}
// // for(let i in marks){
// //     // console.log("marks of ",i," is ", marks[i])
// }
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("marks of "+ Object.keys(marks)[i]+" is :"+marks[Object.keys(marks)[i]])
    /*
    object.keys(marks)[i]       ==> Returns keys of object
    object.values(marks)[i]     ==> Returns values of object
    marks[object.keys(marks)[i]]==> Returns values of object 
    */
}

//Q2
console.log("\n following the output of problem number 2\n")
for(let i in marks){
    console.log("marks of "+ i +" is "+marks[i])
}

//Q3
console.log("\nthis the the output of Q3\n")

function getRandomInt (min,max){
    min =Math.ceil(min);
    max =Math.floor(max);
    return Math.floor(Math.random()* (max-min)+ min)
}
rann=getRandomInt(0,100)
console.log(rann)
let userin
while(userin!=rann){
    userin=rann
    console.log("try again")
}
console.log("you have guessed the number",rann)

//Q4  Write a function to find mean of 5 numbers
console.log("\nfollwing is the output of Q4\n")

function avg (a,b,c,d,e){
    console.log("done")
    return (a+b+c+d+e)/5
}
let avg1=avg(45,69,95,6,7)
console.log("mean of the numbers is: ",avg1)