//Q. Create an array of number and take input from the user to add number to the array

let arr=[]
let num=23
arr.push(num)
console.log(`number ${num} is added in array ${arr}`)


//Q2. Keep addin number to the array unutil 0 is added to the array

let arr1=[]
let randn
let roud=0
do{
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
    randn=getRandomInt(0,100)
    // randn=Number(prompt("enter a number"))
    console.log(randn)
    arr1.push(randn)
    roud+=1
}while(randn!=12)
console.log(`final array after ${roud} itration is ${arr1}`)

//Q3 Filter for number divisibel by 10 form a given array

console.log(`\nQuestion number 3 output`)
let arr_filter=[70,560,950,2696,360,32,69,32]
let new_arr=arr_filter.filter((x)=>{
    return x%10==0;
})
console.log(`number divisible by 10 are ${new_arr}`)

//Q4 Crate an array of sqare fo given numbers

console.log(`\nQuestion number 4 output`)
let arr_map=[70,560,950,2696,360,32,69,32]
let new_map=arr_map.map((x)=>{
    return x*x;
})
console.log(`numbers sqaures are ${new_map}`)


//Q4 Crate an array of sqare fo given numbers

console.log(`\nQuestion number 5 output`)
let arr_red=[7,5,9,6,3,9,2]
let new_red=arr_red.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(`factorial of number ${arr_red} is ${new_red}`)

