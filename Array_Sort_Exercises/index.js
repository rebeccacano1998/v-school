//Sort an array from smallest number to largest

const num=[1, 3, 5, 2, 90, 20]

num.sort(function (a, b){
    return a-b


})

console.log(num)
//--------------------------------------------------------------------------------------------------------------
//Sort an array from largets number to smallest
const num=[1, 3, 5, 2, 90, 20]

num.sort(function(a,b ){

return b-a
})
console.log(num)

//-------------------------------------------------------------------------------------------------------------
//Sort an array from shortest string to longest

const animals=["dog", "wolf", "by", "family", "eaten"]

animals.sort(function(a,b){

    return a.length-b.length
})
console.log(animals)
//-----------------------------------------------------------------------------------------------------------
//Sort an array alphabetically

const animals=["dog", "wolf", "by", "family", "eaten"]

animals.sort(function (a,b){
return a.localeCompare(b)

})
console.log(animals)

//----------------------------------------------------------------------------------------------------------

const byAge=[
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

byAge.sort(function (a,b){
return a.age-b.age

})
console.log(byAge)

