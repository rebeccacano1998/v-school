//Write a function that takes a string as a parameter and returns the same string in all 
//capital letters followed by all lowercase letters.
//capilizeAndLowercase("HelLo") // => "HELLOhello"

var greeting="HELLO"
var newString="hello"
var newGreeting=greeting.concat("hello")
console.log(newGreeting)

//----------------------------------------------------------------------------------------------



//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().

var findMiddleIndex=("Hello World") // => 5
console.log(Math.floor(findMiddleIndex.length/2))


var findMiddleIndex=("Hello") // => 2
console.log(Math.floor(findMiddleIndex.length / 2) )

//--------------------------------------------------------------------------------------------
//Write a function that uses slice() and the other functions you've written to return the first half of the given string.


var firstHalf=("Hello World") // => "Hello"
var cut=firstHalf.slice(0,5)
console.log(cut)


var firstHalf=("Hello") // => "He"
var cut=firstHalf.slice(0,2)
console.log(cut)

//----------------------------------------------------------------------------------------------------
//Write a function that takes a string as a parameter and returns that string where the first half is capitalized,
 //and the second half is lowercase.

 capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"
 
var str1=("Hello")
var str2=str1.charAt(0).toUpperCase() +str1.charAt(1).toUpperCase()+ str1.slice(2);
console.log(str2)

var str1=("Hello World")
var str2=str1.charAt(0).toUpperCase() +str1.charAt(1).toUpperCase()+
str1.charAt(2).toUpperCase()+str1.charAt(3).toUpperCase()+ str1.charAt(4).toUpperCase()+
str1.charAt(5).toUpperCase()+str1.charAt(6).toUpperCase()+str1.charAt(7).toLowerCase()+
str1.charAt(8).toLowerCase()+str1.charAt(9).toLowerCase()+str1.charAt(10).toLowerCase();
console.log(str2)