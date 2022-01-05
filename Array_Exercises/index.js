//Make an array of numbers that are doubles of the first array

const arr=[2,5,100];

const result=arr.map(function(arr){

return arr*2


})

console.log(result)

//-------------------------------------------------------------------------------------------------------------------//
//Take an array of numbers and make them strings


const arr=[2,5,100];

const results=arr.map(function(arr){

    return arr.toString()


})
console.log(results)

//--------------------------------------------------------------------------------------------------------
// Capitalize each of an array of names

function capitalizeNames(arr){ 
     
    let uppClassArr=arr.map(function(string){  
    return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();  
    })  
    return uppClassArr  
    }  
    
    console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))
      


   
   
  //--------------------------------------------------------------------------------------------------------------- 
 //Make an Array of string of the names
    
    
    const celeb=[
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]

   
    const result = celeb.map(function(celeb){
        return celeb.name
    })
    
    console.log(result)
//----------------------------------------------------------------------------------------------
//Make an array of strings of the names saying whether or not they can go to The Matrix


const celeb=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]



const result = celeb.map(function(celeb){

    if(celeb.age>=18){
        console.log(celeb.name + " you can go")
    }

    else{
        console.log(celeb.name + " you CAN NOT go")
    }




})

//------------------------------------------------------------------------------------------------------------
//Make an array of the names in h1s, and the ages in h2s

const celeb=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]



const result = celeb.map(function(celeb){
    console.log('<h1>'+celeb.name+'</h1>' + '<h2>'+celeb.age+ '</h2' )




})

