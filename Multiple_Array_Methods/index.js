//1. Returns a list of everyone older than 18, which is
//2. sorted alphabetically by last name, and where
//3. each name and age is embedded in a string that looks like an HTML `<li>` element.




var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

//reduce
//sort
//list






//list names that are 18 and up
const results=peopleArray.filter(function(names){
    if(names.age>=18){
       return names
       
        
      }
      
   
          
      })
     

      //last name in ABC order
 var newArray= results.sort(function(a,b){
           if (a.lastName< b.lastName){
               
               return -1
              
              
           }
     

 })
 
 //list all names
 finalArray=newArray.map(function(list){
  if(list.age>=18){
     console.log("<li>"+list.firstName+ " "+list.lastName +" is " + list.age+"</li>")  
     
     
     
 }
 })



