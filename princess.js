const readline = require("readline-sync");

//Characters the players will be a able to choose
let playerName = ["Luigi", "Mario"]

let namePicked = readline.keyInSelect(playerName)

//Player will start off as small
let playerStatus = ["Small", "Big", "Powered Up", "Dead"]

//-------------------------------------------------------------------------------------------------------------------//

class character{
    constructor(namePicked){
        //this.value-The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used: 
        //In a method, this refers to the owner object. Alone, this refers to the global object.
        
        this.name=namePicked //mario or luigi
        this.status = playerStatus[0]//small
        this.totalCoins=0 //money will be acumulated later in game
    }


//pass in name picked parameter into function to set it
setName(namePicked){
    this.name = namePicked

}


//(Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
gotHit(){
    if(this.hasStar==true){
        console.log("You have beem saved by the all mighty star")
        this.hasStar=false //star will now be removed
    }

    if(this.status=="Powered Up"){
        this.status=playerStatus=[1] //big; we will go into the array to get our new value
    }

    else if(this.status=="Big"){
        this.status=playerStatus[0] //small
    }

    else if(this.status=="Small"){
        this.status=playerStatus[3] //dead
    }

}

// (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
gotPoweredUp(){

    if(this.status=="Small"){
        this.status=playerStatus[1] //Big
    }

    else if(this.status=="Big"){
        this.status=playerStatus[2] //Powered Up
    }

    else if(this.status=="Powered Up"){
        this.hasStar = true;
        console.log("Youve been given a star!!!! WOW") //player will be given a star
    }

}

addCoin(){
  this.totalCoins++ //adds coins
}

print(){

    console.log("Name: " + this.name) //print whatever name was chosen for the game
    console.log("Status: " + this.status) //print the current status of the character
    console.log("Total Coins: " + this.totalCoins) //print the current coins
    if (this.hasStar === true) {
        console.log("You have a star!") //if the character happens to have a star then that will be printed here
    }




}

}




const savePrincess = ( ) => {

const playerOne=new character(); //initialize new charcater is created her (constructor from above^^)
playerOne.setName(playerName[namePicked]) //name will be set here
//interval will be set to run the game every few seconds

const interval=setInterval(() => {
    let gameRunning=true
    let randomNumber=Math.floor(Math.random(3) * 3) //0,1,2

    if (randomNumber==0){
        playerOne.gotHit()
    }

    else if(randomNumber==1){
        playerOne.gotPoweredUp()
    }

    else if(randomNumber==2){

        playerOne.addCoin()
    }

    if(playerOne.status=="Dead"){
        clearInterval(interval) //cleared interval will reset our game
        console.log("You are D....E....A....D.... MMMWHAHAHHAHAHAH!!!!")
        gameRunning=false;

    }

    console.log(randomNumber)
    playerOne.print()






},1000)//game will run every 1 second
}


savePrincess()
















