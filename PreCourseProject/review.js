

function checkService() {

  if (onclick === "yes") {
    alert("Thankyou")
  }

  else {
    alert("Sorry")
  }

}






function days() {
  let text = "";
  let i = 0;
  while (i < 10) {
    console.log(i)
    i++;
  }
  document.getElementById("Days").innerHTML = text;
}


function myLoop() {
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
}

document.getElementById("myButton").addEventListener("click",myLoop)