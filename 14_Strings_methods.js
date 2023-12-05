let name="Goldmedal"

console.log("convert string ot upper case",name.toUpperCase())     //==> GOLDMEDAL
console.log("convert string ot lower case",name.toLowerCase())     //==>goldmedal
console.log(name.slice(3,7))        //==>dmed


let firnd='rajiv'

console.log(firnd.concat(" is the friend of and abhishek"))

let str="plase give rs 1000"
console.log(str.length)
let amount=Number.parseInt(str.slice(13))       //==> convert string to number and store it in veriable $amount
console.log(amount)


let str2=str+name
console.log(str2)
for(i=0;i<str2.length;i++){
    console.log(str2[i])
}