function random(min,max){
    return Math.random()* (max-min)+min;
}
let randomnum=parseInt(random(1,100))
console.log(randomnum)
let guess
let chances=0
while(randomnum>0){
    // guess=prompt('Guess the number') Math.random() * (max - min) + min;
    guess=randomnum
    if(guess==randomnum){
        console.log(`Congrats!! you have guess the number.\nin ${chances} Chances`)
        break;
    }
    else if(guess>randomnum){
        console.log(`Umm Hmm!! Your guess number is Greater\nTry Again`)
    }
    else if(guess<randomnum){
        console.log(`Umm Hmm!! Your guessed number is Smaller\nTry again!!`)
    }
    else{
        console.log(`Someting went worng;\nGuessed number: ${guess}\nActual number: ${randomnum}`)
    }
chances+=1
}