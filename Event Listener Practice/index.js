/*addEventListener() The method addEventListener() works by adding a function, or an object that implements 
EventListener, to the list of event listeners for the specified event type on the EventTarget on which it's 
called. If the function or object, is already in the list of event listeners for this target, they are not added 
a second time.*/


/*Mouse over*/
document.getElementById("myID").addEventListener("mouseover", function() {
    document.getElementById("myID").style.backgroundColor = "blue";
});

/*On Mouse Down*/
document.getElementById("myID").addEventListener("mousedown", function() {
    document.getElementById("myID").style.backgroundColor = "red";
});

/*On Mouse up*/
document.getElementById("myID").addEventListener("mouseup", function() {
    document.getElementById("myID").style.backgroundColor = "yellow";
});


/*Double click*/
document.getElementById("myID").addEventListener("dblclick", function() {
    document.getElementById("myID").style.backgroundColor = "green";
});




/*Scroll*/
document.addEventListener("scroll", function(){
     document.getElementById("myID").style.backgroundColor = "orange";})




     
/*keydown function ????????*/



document.addEventListener("keydown",(event)=>{
    document.getElementById("myID").style.backgroundColor = "pink";
    if(event.key==="p"||event.key==="P") {
        Pink();}

 

    })