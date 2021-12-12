
//readlineSync tries to let your script have a conversation with the user via a console

var readline = require('readline-sync');


//store answers inside of variables so data is saved
var firstNumber = Number(readline.question("Please enter a number: "));
  var secondNumber =Number( readline.question("Please enter another number: ")); 
  var myOperator = readline.question("Please enter an operator: add,sub,mul,div "); 
  


  // passing in two numbers in parenthesis you want used and we tell the console to return the value

  //add two numbers
  function addTwoNumbers(firstNumber,secondNumber){
      return firstNumber + secondNumber;
  }

  //subtracting two numbers
  function subtractTwoNumbers(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

//multiply two numbers
function multiplyTwoNumbers(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}

//divide two numbers
function divideTwoNumbers(firstNumber,secondNumber){
    return firstNumber / secondNumber;
}

//calculation occurs here
//our numbers and operator gets passed through the function myCalculation

function myCalculation(firstNumber, secondNumber, myOperator){ 
    if(myOperator=="add"){
        console.log(" when you add the first number: " + firstNumber + " with the second " +secondNumber+ " it gives you the result: "
        +addTwoNumbers(firstNumber,secondNumber));
        //when you add the function togtehor FIRST NUMBER + SECOND NUMBER gives you the function written earlier.
    }


    else if(myOperator=="sub"){
        console.log(" when you subtract the first number: " + firstNumber + " with the second" +secondNumber+ "it gives you the result "+subTwoNumbers(firstNumber,secondNumber));
    }

    else if(myOperator=="mul"){
        console.log(" when you multiply the first number: " + firstNumber + "with the second " +secondNumber+ " it gives you the result "+mulTwoNumbers(firstNumber,secondNumber));
    }

    else if(myOperator=="div"){
        console.log(" when you divide the first number: " + firstNumber + " with the second " +secondNumber+ "it gives you the result "+divTwoNumbers(firstNumber,secondNumber));

    }

}

myCalculation(firstNumber,secondNumber,myOperator);
//call our function here