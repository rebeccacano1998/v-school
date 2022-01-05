//rest operator
//pass in as many animals as possible

function collectAnimals(...pets) {
   console.log(pets)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]




 



//--------------------------------------------------------------------------------------------------
//HELP##############################
 const combineFruit=(fruit, sweets, vegetables)=>{
   return{
     fruit: fruit,
     sweets: sweets,
     vegetables: vegetables
   }
}

combineFruit(["apple", "pear"],
            ["cake", "pie"],
            ["carrot"])

         
            /*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
      }
*/







//-----------------------------------------------------------------------------------------------------
//Use destructuring to use the property names as variables. Desructure the object in the parameter:
function places({location,duration}){
   return `We're going to have a good time in ${location} for ${duration}`
   }
   
   const parseSentence=({
     location: "Burly Idaho",
     duration: "2 weeks"
   });
               
   console.log(parseSentence)

  
  
  
  
  
  
   //----------------------------------------------------------------------------------------------------
   //Use array destructuring to make this code ES6:

   function returnFirst(items){
      /*change this line to be es6*/
      const[a]=firstItem //a is the first value
      return firstItem
  }
  
  
  
  
  
  
  //--------------------------------------------------------------------------------------------------
  //Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:


  const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    const[firstFav,secondFav,thirdFav]=favoriteActivities

    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

returnFavorites(favoriteActivities)









//--------------------------------------------------------------------------------------------------------------------
//HELP######################

function combineAnimals(...wildLife) {
    return wildLife
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//---------------------------------------------------------------------------------------------
//Make the following more es6y
//HELP###############################

const product=(a, b, c, d, e)=> {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//-------------------------------------------------------------------------------------------------------
//###################HELP
const unshift=(array, a, b, c, d, e)=> {
  return [a, b, c, d, e].concat(array);
}

//-----------------------------------------------------------------------------------------------------------
/*Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look 
less redundant to simplify it:*/

//##################HELP



function populatePeople(names){
  return names.map(name => {
      name = name.split(" ");
      // your code
      return {
          firstName: name[0],
          lastName: name[1]
      }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]