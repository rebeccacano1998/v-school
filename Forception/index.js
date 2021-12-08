

var newArray=[] //final output array
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(){
    //people for loop
    for(var i=0; i < people.length; i++){
        //push the name of the people into newArray one time
        newArray.push(people[i])
    
    //alphabet for loop
    for(var j=0; j< alphabet.length;j++){
        //push first letter of the alphabet into new people array one at a time
        newArray.push(alphabet[j].toUpperCase())
        }
        
        
    }return newArray
}

console.log(forception())



