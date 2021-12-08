//--------------------preliminary----------------------
//1. Write a for loop that prints to the console the numbers 0 through 9.

var ages=[0,1,2,3,4,5,6,7,8,9];

for(i=0; i<=9 ;i++){
    console.log(i)

}

//Write a for loop that prints to the console 9 through 0.
var ages=[0,1,2,3,4,5,6,7,8,9];

for(var i=ages.length-1;  i>=0; i--){
    console.log(ages[i])

}

//Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]


const fruit=["banana", "orange", "apple", "kiwi"]

for(var i=0; i< fruit.length; i++){

    console.log(fruit[i])

}

//--------------------------------bronze---------------------

//Write a for loop that will push the numbers 0 through 9 to an array.
var numbers=[]

for(i=0; i < 1 ;i++){
    numbers.push(1,2,3,4,5,6,7,8,9);
    console.log(numbers)

}


//Write a for loop that prints to the console only even numbers 0 through 100.
var array=Array.from(Array(101).keys())


for(var i=0; i< array.length; i++){
 if(array[i] % 2===0){
   console.log(array[i])   
    
}
}

//Write a for loop that will push every other fruit 
//to an array.const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(var i = 0; i < fruit.length; i += 2) {
    console.log(fruit[i]);
}









