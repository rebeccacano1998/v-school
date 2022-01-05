/*const xhr = new XMLHttpRequest()  //constructor, holds the response


xhr.open("GET", "https://api.vschool.io/pokemon", true) //open a request
xhr.send() //send request

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText //store the request in another variable
        const data = JSON.parse(JSONdata) //convert data from string to object with parse
        console.log(data) //console
        
    } 
}
*/



const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText //store the request in another variable
        const data = JSON.parse(JSONdata) //convert data from string to object with parse
        showData(data.objects[0].pokemon) //function to append names to document
    } 
}


function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}

