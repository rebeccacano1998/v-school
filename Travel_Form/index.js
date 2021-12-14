const form=document.myForm
const first=document.getElementById('first') //text input
const last=document.getElementById('last')//text input
const age=document.getElementById('age')//age input





form.addEventListener("submit",(event)=>{
    event.preventDefault()

    //text; number input
    console.log(first.value);
    console.log(last.value);
    console.log(age.value);


    //radio input
    console.log(form.gender.value)

    //select
    console.log(form.location.value)

    //checkbox

    checked=[] //checked values will go into empty array
    
    for(var i=0; i<form.diet.length; i++){
        if(form.diet[i].checked){
            checked.push(form.diet[i].value)


        }
        



    }

console.log(checked)






})