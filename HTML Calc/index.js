let display=document.getElementById('display')
let buttons=Array.from(document.getElementsByClassName('button')) //will retrive all of our buttons in a single variable, turn into array

//.map calls on the elements in teh array we created
buttons.map(button => {
    button.addEventListener('click',(e)=>{
     
       //when 'c' is clicked text will be removed via empty quotes 
       switch(e.target.innerText){
        case 'C':
            display.innerText=''
            break;


            
        case'←':
        //will only execute if theres text typed
            if(display.innerText){
            display.innerText=display.innerText.slice(0,-1); //will clear out all the characters
            }
            break;
        
        case'=':
            //will try the function and display it as error
            try{
                display.innerText=eval(display.innerText);


            }
            catch{

                display.innerText='Error';
            }
            //takes in a string as a parameter which will display text and executes
            display.innerText=eval(display.innerText) 
            break;

       default:
        display.innerText += e.target.innerText; //will fill in the empty white space with our numbers 

       
      

        
       }

    });


});
    