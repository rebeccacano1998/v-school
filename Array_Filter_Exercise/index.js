//1.) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const num=[3, 6, 8, 2]

const results=num.filter(function(number){
    if(number >=  5){
        return true;
    }
    
})

//ES6
const num=[3, 6, 8, 2]

const results=num.filter(number => number >=  5)
    
console.log(results)


//====================================================================================================================================

//2.)Given an array of numbers, return a new array that only includes the even numbers.

const num=[3, 6, 8, 2]

const results=num.filter(number => number % 2 === 0)
    
console.log(results)

//==============================================================================================================

//3.)Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const animals=["dog", "wolf", "by", "family", "eaten", "camping"]


const results=animals.filter(function(wolf){
    if(wolf.length <=  6){
        return true;
    }
    
})
console.log(results)

//ES6

const animals=["dog", "wolf", "by", "family", "eaten", "camping"]

const results=animals.filter(wolf=>wolf.length <=6)

console.log(results)

//============================================================================
//4.)Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const celebs= [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const results=celebs.filter(function(illuminati){
    if(celebs.member==="true"){
        return true
    }



})
console.log(results)

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const celebs= [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const results=celebs.filter(function(celebrity){
    if(celebrity.member===true){
        return celebrity
    }



})
console.log(results)

//=========================================================================================================
// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const age=[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]


const results=ages.filter(function(celebs){
    if(celebs.age >= 18)
    return true
    
    
    
})

console.log(results)