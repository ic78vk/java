let arr=[25,96,69,64,39,88,52]
console.log(typeof(arr),arr)
arr[5]=69
console.log(arr)

arr[7]='harry'
console.log(arr, typeof arr)
//Quizze

let arr2
let value=12
for(i=0;i<Object.values(arr).length;i++){
    console.log(`IN array arr of index ${i} value ${arr[i]} is present and type of that is :"${typeof(arr[i])}"`)
}

// function length(a){
//     return a.length;
// }
// console.log(length(arr),arr.length)
console.log(arr.length)