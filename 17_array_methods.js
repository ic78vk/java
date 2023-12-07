/*
1. tostring --> convert array into string i.e let b =num.toSting()

2. join --> join 2 array elements i.e let c = num.join("and") ==> 1 and 2 and 3 and 4 and.....

3. pop --> remove last element of array i.e num.pop()==> from [1,2,3,4] to ===> [1,2,3]
         it also retrun popped element let r=num.pop()==> [1,2,3] 4 <-- popped element

4. push --> add new element at the end of array i.e num.push[5] ==> [1,2,3,5]

5. shif and unshif --> shift remove the 1st element and unshif add the element at end of array

6. delete  --> it is a oprator user to delete any element of array by its index number i.e delet num[0] ==> [2,3,5]

** if any element of array is deleted then also array lenght is not chaned 
** array data type is object in js
*/

// to string

let arr = [25,84,5,68,9, 'rahul']

let str =arr.toString()
console.log("\narray arr is not converted into sting :" ,str, typeof(str) )

// join

let joiin = arr.join(  )
console.log("\nafter joinig the arr using 'now':", joiin, typeof(arr),"\n")

// pop

console.log("\n\nbefore pop :", arr," length: ",arr.length)
let ppop= arr.pop()
console.log("\nafter popped from arr: ", arr,"Typeof arr: ",typeof(arr),"sizeof arr :",arr.length, "and  variable ppop value: ", ppop)


// push

console.log("\n\nbefore push :", arr," array length: ",arr.length)
let ppush= arr.push(99)
console.log(`\nafter push in arr: , ${arr},Typeof arr: ,"${typeof(arr)}",sizeof arr :,${arr.length}, and variable ppush value: , ${ppush}`)

//Shift
console.log(`\n\nBefore shift arr : ${arr} lenght : ${arr.length}`)
let shifft = arr.shift()
console.log(`\n after Shift in arr : ${arr} Typeof arr : "${typeof(arr)}", length of arr: ${arr.length} and shifted value: ${shifft}`)

//Delete

console.log(`\n\n Before delete arr: ${arr} and Length : ${arr.length}`)
let dell=delete(arr[2])
console.log(`\nAfter delete : ${arr} and typeof arr: ${typeof(arr)} length of arr: ${arr.length} and delete value: ${dell}`)

