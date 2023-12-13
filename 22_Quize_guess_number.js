function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
let rannnum=getRandomInt(0,100)
console.log(rannnum)
let guessnum
let chances =5
// let guessnum=prompt('Enter the number')
while(rannnum>=0){
    let guessnum=prompt('Enter the number')
    if(guessnum>rannnum & chances!=0){
        console.log(`Your guessed number is Greater than to actual number${guessnum} \nTry again...`)
        chances -=1;
    }
    else if(guessnum<rannnum & chances!=0){
        console.log(`Your guessed number is less than to actual number${guessnum} \nTry again...`)
        chances -=1;
    }
    else if(chances==0){
        console.log(` Ummm Hmmm sorryyy!! Your chances is over \nBetter luck for next time ${chances}`)
        break;
    }
    else if(guessnum==rannnum & chances!=0){
        console.log(`Your guessed the currect number!!!\n and you taked ${chances} to Guess it`);
        break;
    }
    else{
        console.log(`Something Went Worng ; Guess number: ${guessnum} actual number: ${rannnum}`)
    }
}