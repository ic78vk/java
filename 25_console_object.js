console.error("this is error massage shown using console.error object")      //used to print code errors

console.assert(56>56)       //if condition ouputis false then only shown error

console.clear()     //used to clear console

// console.table()

arr=[25,696,3,976,256,39,4596,69]
const student={
    name:'rajiv',
    age:33,
    mobile:887418845,
    email:'rajive234@gamil.com',
    address:'23/44 test villate'
}

console.table(arr)      //user to show data in table format applied for 
console.table(student)      //user to show data in table format applied for 

console.warn("\nthais is and test warning msg using warnning object")       //used to show warring massage

//console.info()   same work as console.log

console.info('\nthis massage is printed using console.info object')

//console.time()  //used to calculate any opration time
console.time('forloop') //labale should be same for stating and ending
for(let i =22; i<23; i++){
    console.log('\nprinting excution time using console.time object')
}
console.timeEnd('forloop') //label should be same for stating and ending