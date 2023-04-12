function guessNum(){
    var random = Math.floor(Math.random() * 10) + 1;

    var number = Number(prompt("Guess a number from 1 to 10: "));
    
    while(number !== random){

        if(number > 11) {
            Number(prompt("Number not in range..TRy again!"));
        }
        if(number === 0){
            prompt("it was empty");
        }
        number = Number(prompt('Guess is not correct try again!... '));
    }
   
    if (number === random){
        console.log(`You guessed the correct number. Number:${number}, RandomNo:${random}`);
    }
    
}

guessNum();

 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              




