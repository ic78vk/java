/*
map==>  # use to map any element presend within array 
        # map return new array and did't change old
        # map take 3 inputs *value * index *array
        *value -> return a array elements 
        *index -> return a array elemnts index number
        *array -> return a array 
        # syntax.
        let new_arr=old_Arr.map((value,index,array)=>{console.log(value,index,array)}) ==> 2 0 [2,3,4,5]
*/

// map
let arr=[2,5,6,4,3]
let new_arr=arr.map((value,index,array)=>{
    console.log(`${value} is present on index ${index} of array ${array}`)      //2 is present on index 0 of array 2,5,6,4,3
})

//filter
/*
filter==> user to filter element of array
          filter return new array and did't change old
          as like map; filter also 3 inputs *value *index *array
          *value -> return a array elements 
          *index -> return a array elemnts index number
          *array -> return a array 
          syntax.
          let new_arr=old_arr.filter((value)=>{return a<10})  ==> return values that less than 10 in old_arr
*/
console.log('\nFilter fuction in array')
let arr2=[45,81,69,222,86,39,26,22]
let new_filter=arr2.filter((value,index,array)=>{
    // console.log(value<50? value: 'false',value<50? index :'false')
    return value<50;
})
console.log(`values that less than 50 is ${new_filter}`)

//Reduce
/*
Reduce==> Reduce return the one value ; that is a sum of all values present in array
          Out put of reduce is depends on what inputs is suppied
          it takes 2 inputs
          syntax.
          let arr_reduce=old_arr.reduce((v1,v2)=>{return h1+h2})  
          here, v1 is accumulator -> 1st value and then sum of 1&2 then1+2 &3 ; 
                v2 is current value 2nd value and then 3rd,4rt,5th..
*/
console.log(`\nReduce funtion in array`)
let arr3=[58,69,6,'rahul',52,24,47]
let arr_reduce=arr3.reduce((h1,h2)=>{return h1-h2;})
console.log(arr_reduce)
          