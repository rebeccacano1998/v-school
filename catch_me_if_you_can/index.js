//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is 
//not of the data type number:
//Call the sum function inside a try block using "1" and "2" as 
//arguments. Use console.log within a catch block to inform the user of the error.

try {
    
    function sum(x,y){
        if(typeof(x)==='string'){
            
       throw new Error("Hey I am an error!")
        }
       return x+y
    }
    console.log(sum(1,2))
    } 

catch(err){
    console.log(err)
}

//------------------------------------------------------------------------------------------
//Given a user object, write a function called login that takes a username and password as parameters. 
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
//Call the login function within a try block. In one instance use the correct credentials, and in another
// use incorrect ones. Make sure you see the appropriate message!
var user = {username: "sam", password: "123abc"};

try{
function login(username, password){
    if (username=="sam" && password== "123abc"){
          //check credentials
        console.log("welcome")
        
    }
    
   
    
    else{
            throw new Error("Hey thats not the login")
   
    }

}
 console.log(login("sam" ,"123abc"))

 }

catch(error){
    console.log(error)
    
}

