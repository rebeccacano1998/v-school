var readline = require('readline-sync');
var playerName=readline.question("Please enter your name");



console.log('-------------------------------------------');


var welcomePage=('Welcome! ' +playerName+ ' This is the room escape game called Great Escape');
console.log(welcomePage);

var welcomePage2=('This game may seem easy but it filled with twist and turns. You will have a series of choices in order to escape the room. Have fun and choose wisely');
console.log(welcomePage2);


console.log('-------------------------------------------');

var isAlive=true;
var hasKey=false;

//if alive = true then loop then while loop will continue to run


while(isAlive==true){
const menuOptions=readline.keyIn ('\n Enter 0 to insert your hand in the hole \n Enter 1 to look for the key \n or Enter 2 if you wish to open the door');


//is alive has to be true to continue the game
//since is Alive is false then loop ends
    if(menuOptions==0){
        console.log('\n ***The hole had a trap! im sorry you die!');
        isAlive=false;
        
    }

    //if hasKey equals true then game continues on in the loop
    // player chooses option 2 initially and has not had key
    else if(menuOptions==1){
        console.log('\n ***You found the key ! congrats. Proceed to the next step');
        hasKey=true;
        

    }


    

    //player chooses option 2 and has no  key  
    //has key will be false and you will be looped through questions again
    else if(menuOptions==2 && hasKey==false){
        console.log('\n ***you dont have the key!! please try again!');
        
    
    }

    //player has key and opens door
    //player has key so loop will end
    //is alive is false so this will discontinue the loop
    else if(menuOptions==2 && hasKey==true){
        console.log('\n ***Congratulations you won the game!!')
       isAlive=false;
        
     
    }

}

