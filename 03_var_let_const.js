// var used in old websites
// let used in new or morden webapplication
// const also userd in morder webapplication

var a =22   //var and let both user to declared veriables; var is a globle veriables 
//          // var can be redeclared ro update from anywhere in code
let ab=22    //let is a block variable means 
//          // let variable can be updated but not redeclared
const abc=22      // const used to keep any specific value permanets 
//              //i.e ones any variable declared as a "const" then it can't be redeclared or updated

// define varibale user var
var name ='rahul'
var _name='rahul'
var $name='rahul'

console.log("variale decalration using 'name' is:", name)//,"varibale declaration using '_name' is:", _name, "varibale declaration using '$name' is:",$name)

// define varibale using let
let value=22
let _value1=32
let $value22=42
let $value=53
console.log("veribale declaration using 'value' is:",value)
// console.log("veribale declaration using '_value' is:",_value1)
// console.log("veribale declaration using '$value22' is:",$value22)
// console.log("veribale declaration using '$value' is:",$value)

//define varibale using const

const rahul=33
const colours={
    red:33,
    yellow:44,
    orange:23
}
console.log("varibale declaration using 'const' is :",colours.orange)