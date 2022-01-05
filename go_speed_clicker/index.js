const clickBtn=document.getElementById("click")
const timer=document.getElementById("timer")



let count = 0 || localStorage.getItem("count")

function incrementTimer(){
    count++
    timer.textContent=count
   
}



clickBtn.addEventListener("click",function(){

    incrementTimer()
    
})

localStorage.setItem("count", count);