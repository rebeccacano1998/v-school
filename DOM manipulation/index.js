//----------------------------------------------------header--------------------------------------------------------
var myHeader=document.getElementById("header")
myHeader.innerHTML += "<h1> Javascript Made This!!</h1>"

var myHeader2=document.getElementById("header")
myHeader2.innerHTML += "<h3><span>Rebecca</span> Wrote This javascript</h3> " /*change color!!!!*/

//----------------------------------------------------text----------------------------------------------------------
var message=document.getElementById("text1")
message.innerHTML += "<p>whats up friend?</p>"

var message=document.getElementById("text2")
message.innerHTML += "<p> any plans this weekend?</p>"

var message=document.getElementById("text3")
message.innerHTML += "<p>no, not really</p>"

var message=document.getElementById("text4")
message.innerHTML += "<p>wanna grab suhsi?</p>"

//-----------------------------------------------------clear-------------------------------------------------------
function clear_inputs(){
  document.getElementById("text").innerHTML = "";
}

//----------------------------------------------drop down--------------------------------------------------------
