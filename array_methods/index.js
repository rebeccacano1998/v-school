//Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that 
//performs many operations on them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var fruitveg=fruit.concat(vegetables)
console.log(fruitveg)
//----------------------------------------------------------------------------------------------------



//Remove the last item from the vegetable array.
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
console.log(vegetables)

//-----------------------------------------------------------------------------------------------

//find the index of orange
var fruit = ["banana", "apple", "orange", "watermelon"];
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

//-----------------------------------------------------------------------------------------------------

//Add that number to the end of the fruit array.
var fruit = ["banana", "apple", "orange", "watermelon"];
 fruit.push("2");
 console.log(fruit);


 //------------------------------------------------------------------------------------------------------


// Use the length property to find the length of the vegetable array.
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log(vegetables.length);

//----------------------------------------------------------------------------------------------------------
//Add that number to the end of the vegetable array.
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
fruit.push("4");
 console.log(vegetables);

 //-----------------------------------------------------------------------------------------------------------
 //Put the two arrays together into one array. Fruit first. Call the new Array "food".
 
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food=fruit.concat(vegetables)
console.log(food)

//-----------------------------------------------------------------------------------------------------------
//Remove 2 Elements from your Array starting at index 4 with one method
var food=["banana", "apple", "orange", "watermelon", "carrot", "tomato", "pepper", "lettuce"];
food.splice(4,2)
console.log(food)

//------------------------------------------------------------------------------------------------------------
//Reverse your array.

var food=["banana", "apple", "orange", "watermelon", "carrot", "tomato", "pepper", "lettuce"];
food.splice(4,2)
var reverse=food.reverse()
console.log(reverse)

//------------------------------------------------------------------------------------------------------
//turn array into a string
var food=["banana", "apple", "orange", "watermelon", "carrot", "tomato", "pepper", "lettuce"];
food.splice(4,2)
var reverse=food.reverse()
console.log(reverse)
var string=reverse.toString()

