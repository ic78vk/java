/*let arr1=[6,6598,945,48,53,154,81,54,484,151,5484,659,662,19,99,61]
arr1.sort()
let a1=arr1.sort(function(a,b){return b-a})
console.log(a1, typeof(a1), arr1.length)
*/

//Concate  -->return new array *at a time multiple arrays can be contad

let arra=[5,6,2,4,9,8,6,3]
let arra1=[25,66,92,34,89,58,66,33]
let arra12=[788,625,962,336,122,355]

let new_array= arra.concat(arra1,arra12)
console.log(`\nnew array is : ${new_array}`)

//Sort   --> modify the original array  *sort a->z i.e a, aa, aab, aac,aad

new_array.sort(function(a,b){return a-b})
console.log(`\nAfter sort the new_array: ${new_array}`)


//splice & slice  -->splice=> modify original array || slice=*it used new array
//splice

let num=[548,623,655,689,336,569]
let spicc=num.splice(2,2,65,85)     //in splice we can add values also i.e 65 and 85 added after index number 2
console.log(`\nafter splice :${spicc} \rand original :${num}`)

//slice

let num1=[548,623,655,689,336,569]
let slicee=num1.slice(1,3)      //remove element btwn index 1 to 3 and return into variable sliceee
console.log(`\nafter spice :${slicee} \rand original : ${num1}`)