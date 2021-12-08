//tell user how many times string computer is used

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", 
"computer", "lamp", "stapler", "computer",  "computer"]

count = 0; //set counter to 0

for(var i = 0; i < officeItems.length; i++){


//if office items equals the word computer then execute function
if(officeItems[i] === "computer"){ 
    count=counter+1
}

}
console.log(count); //log the count variable


//------------------------------------------------------------------//
//log old enough if 18 or up
//log not old enough if below 18

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  

  count=0;
  for(var i = 0; i < people.length; i++){
    

    //if office items equals the word computer then execute function
    if(people[i].age >= 18){ 

        console.log(people[i].name + " Youre old enough");
    }
     else{

        console.log(people[i].name + " NOT old enough");
    }

}