/*
loop used to print array elements
in old code for loop is mostly used to print array element
*/

//For loop

let num=[2,,3,6,8,,4,5,86,9]
console.log(`\nfor loop in arrray`)

for(i=0;i<num.length;i++){
    console.log(`array num contains ${num[i]} in index ${i}`)
}

//For each loop  **user when we need to do some opration on exiting array

let num2=[2,4,3,6,8,2,4,5,86,9]
console.log(`\nFor each loop in array`)
num2.forEach((Element)=>{                   //it take 3 inputs --> value , index, array
    console.log(`num2 have values :${Element}`)
})

//for in loop

let num3=[58,69,63,25,36]
console.log(`\nFor in loop in array`)
for(let i in num3){
    console.log(`${i}`)         //for in loop return the index of each arrray elemet; using num3[i] we can print value of each index
}

//for of loop

let num4=[88,96,28,32,65,45]
console.log(`\nFor off loop in array`)
for(let i of num4){
    console.log(`${i}`)         //for of loop return value of each array index ; 
}