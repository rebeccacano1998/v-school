var readlineSync = require('readline-sync');
var playerName=readlineSync.question("Please enter your name:"); //playername will be stored here

console.log('-------------------------------------------');


const welcomePage=('Welcome! ' +playerName+ ' This game is called The great Cereal Heist ! it is full of twist and turns. Your cereal has been stolen by cereal thieves! it is your goal to get your cereal back. If you are killed by enemies then the game will end ');
console.log(welcomePage);

const enemeies=["count_chocula", "captain_cruch", "rice_krispy"];
const treasure=["spoon", "bowl", "milk","cereal"];
var prize=[];
let playerHealth=60;
const menuOptions=["walk" ,"flee"];
let collectedTreasure=treasure[Math.floor(Math.random()*treasure.length)] //treasure (array) picked will be randomized 
let enemyHealth=30;
const attackStrength=Math.floor(Math.random()*11) //returns a value between 1-10. players attack strength
//const enemyChosen= Math.floor(Math.random()*2) //enemy between 0,1,2 will be chosen
const enemyPower=Math.floor(Math.random()*6)

        function cerealHeist(){
            const index=readlineSync.keyInSelect(menuOptions,"Will you walk in or flee") //const menuOptions will be pulled so player can choose to walk(1) or flee(2)
  
            if(menuOptions[index] == "flee"){  
                console.log("You have left the game, bye!")
                return playerHealth=0; //player health is 0 so it wont run in the loop

            }

            else if(menuOptions[index]=="walk"){
                let randomNum=Math.random();   //math.random will pull a random number <=.30 means they will walk in prace
                        if(randomNum <=.30){
                         console.log("Youve escaped danger for now...keep walking")
                         }

                        else if(randomNum >.30){
                            console.log(' OH NO! theres '+ enemeies[Math.floor(Math.random()*enemeies.length)]) //random enemy picked
                                    while(enemyHealth > 0 && playerHealth > 0){ //fight will be executed under these conditions
                                        
                                        
                                        console.log('-------------------------------------------');

                                    const player=readlineSync.question(" will you run (press r ) or fight (press f) ");
                                          //player choose r can either be hit or get away completley or
                                          //player can choose f   

                                    switch(player){ //player holds the run(r) or fight(f) option
                                            case 'r':

                                        const run =Math.random() //create variable for run option since theres two options that can occur
                                        
                                       

                                                 if (run<=.5){
                                                console.log('-------------------------------------------');

                                                console.log(" Oh no! the enemey has struck you, youve taken "+enemyPower+" damage ")
                                                 }
                                  

                                                 else {
                                                console.log('-------------------------------------------');

                                                 console.log(" You got away!! ")
                                                break;

                                                 }
                                            
                                            
                                            //new case, battle takes place here
                                                 case 'f':
                                                     enemyHealth=enemyHealth-attackStrength;
                                                     console.log('-------------------------------------------');
                                                     console.log(" you did "+ attackStrength +" in damage ")
                                                     playerHealth=playerHealth-enemyPower;
                                                     console.log('-------------------------------------------');

                                                     console.log(" you took " +enemyPower +" in damage ")
                                                     
                                                     if (enemyHealth <= 0){
                                                        console.log('-------------------------------------------');

                                                        console.log(" You have killed the enemy and found " + collectedTreasure);
                                                     }
                                                else if(playerHealth<=0){
                                                    console.log('-------------------------------------------');

                                                        console.log(" youve been killed! so sorry! ")


                                                }
                




            }
        }

    }










    }
}




//to keep game running insert into a loop

while(playerHealth > 0) { //while player health is greater than 0
    playerHealing = function(){   //create function that keeps loop running as long as play is alive
        playerAlive = true; //keeps loop running
     }
    playerHealing();  //call the function we just created and the cerealHeist function on loop
    cerealHeist();
} 


        