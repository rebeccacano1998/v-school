//Turn an array of numbers into a total of all the numbers

const total=[1,2,3]

const results=total.reduce(function(final,numbers){
    final+=numbers
    return final

},0)

console.log(results)

//----------------------------------------------------------------------------------------------------------------------
//Turn an array of numbers into a long string of all those numbers.

const numbers=[1,2,3]


const results=numbers.reduce(function(final,numbers){
final.push(numbers+"") //push the values into an empty array
return final



},[])

console.log(results)

//-----------------------------------------------------------------------------------------------------------------
// Turn an array of voter objects into a count of how many people voted

const  voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]


const results=voters.reduce(function(final,voters){
    if(voters.voted===true){
        final++ //if voters voted then incriment count by 1

    }
        return final //return the number

},0)

console.log(results)
//----------------------------------------------------------------------------------------------------

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const results=wishlist.reduce(function(final,cars){
    final+=cars.price
    return final

},0)

console.log(results)

//-----------------------------------------------------------------------------------------------------------
//Given an array of arrays, flatten them into a single array

var arr= [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const results=arr.reduce(function(a,b){
   
    return a.concat(b)
    
},[])

console.log(results)

//-------------------------------------------------------------------------------------------------------------------
//Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]


const results=voters.reduce(function(final,votes){
   
    if(votes.voted){
        
        final.didVote++
    }
    
    else{
        
        final.didNOTVote++
    }
    return final
    
    
} ,{didVote:0, didNOTVote:0})

console.log(results)
