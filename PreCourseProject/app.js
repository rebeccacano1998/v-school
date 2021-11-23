var cupcake={
    price:5.00,
    calories:250,
    flavors:["strawberry", "chocolate","vanilla"]
 }
 
 console.log(Cupcake.price)
 
 var tart={
    price:4.50,
    calories:300,
 
 }
 
 var pie={
    price:10.00,
    calories:600,
    flavors:["apple", "cherry","pumpkin"]
 }
 
 //objects can hold functions (this is known as a method)
 
 function myCupcake(){
   var price="This item cost $5.00";
   var calories="   It contains 250 calories";
   var togethor= price+calories;
 
   document.getElementById("cupcake").innerHTML=togethor;
 
 
 
 }
 
 function myPie(){
    var price="This item cost $10.00";
    var calories="   It contains 600 calories";
    var togethor= price+calories;
  
    document.getElementById("pie").innerHTML=togethor;
 
 
 }
 
 function myTart(){
 
    var price="This item cost $4.50";
    var calories="   It contains 300 calories";
    var togethor= price+calories;
  
    document.getElementById("tart").innerHTML=togethor;
 
 }
 
 
 
 
 