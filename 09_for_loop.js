// for loop
console.log("FOllowing is the output of 'For' loop\n ")

let a=22
for(a=0;a<=10;a++){
    console.log("A is now:",a)
    if(a==10){
        console.log(" ")
    }
}

// for of loop
console.log("FOllowing is the output of 'For Of' loop\n ")

let name="rahul is a vary good boy"
let b
for(b of name){
    console.log("string is : ", b)
    
}
for(i in name){
    a2=parseInt(i)
    if(a2+1==name.length){
        console.log(" ",name.length)
    }
}

// for in loop
console.log("FOllowing is the output of 'For in' loop\n ")

let arr=[25,58,84,5,9,6,4587,46,98,4]
for(c in arr){
    console.log("in ", c,"index of array arr value :",arr[c]," is present"/*,arr.length*/)
    a1=parseInt(c)
    if(a1+1>=arr.length){
        console.log(" "/*,arr.length,c+1,typeof(c)*/)
    }
}