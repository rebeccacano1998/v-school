
(function(){
    var list=document.querySelector('#list'), //list ID
    form=document.querySelector('form'), //form
    field=document.querySelector('#title'); //input id

    form.addEventListener('submit',function(ev){ //create event listener for submit button
        var text=field.value;  //variable to enter text

        if(text !==''){  //if textbox does not equal have text
            list.innerHTML +='<li>'+text+ '<button onclick="Delete(this);">X</button </li>'; //inset text and delete button"x" button
            field.value=''; //empty text value
            }

//prevents page from reverting to default

ev.preventDefault(); 
    
    }, false);

})();

function Delete(currentElement){ //delete current element
    currentElement.parentNode.parentNode.removeChild(currentElement.parentNode);
    }