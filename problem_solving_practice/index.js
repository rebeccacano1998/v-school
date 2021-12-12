//Write a function that takes an array of numbers and returns the largest (without using Math.max()
//largest([3, 5, 2, 8, 1]) // => 8

const numbers=[3, 5, 2, 8, 1]
//function will accept an array of values
const largestNumber=(values)=>{
    let highest=0;
    for(let i=0; i<values.length; i +=1) //if each value item is bigger than the value we have set tehn we will do assigment and hihest is equal to values[i]
        if(values[i]>highest){

            highest=values[i]
        }


return highest

}

console.log(largestNumber(numbers))
//must put numbers or compiler will juat return "f()"


//Write a function that takes an array of words and a character and returns each word that has that character present
//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

const arr1=["#3", "$$$", "C%4!", "Hey!"]

const arr2=arr1.slice(2,4)
console.log(arr2)

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

var isDivisible=(4, 2) // => true
var isDivisible=(9, 3) // => true
var isDivisible=(15, 4) // => false



//isDivisible=[4, 2] // => true
//isDivisible[9, 3] // => true
//isDivisible[15, 4] // => false

var div=[4,2]


if(div[0]%div[1]==0){
   console.log('true')
}
else {
    console.log('false')
}

//------------------------------------------------------------------------------------

var div=[9,3]



if(div[0]%div[1]==0){
   console.log('true')
}
else {
    console.log('false')
}

//-------------------------------------------------------------------------------------------
var div=[15,4]

if(div[0]%div[1]==0){
   console.log('true')
}
else {
    console.log('false')
}