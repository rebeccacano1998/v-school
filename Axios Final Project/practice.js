//get data
function getData() {
    axios.get("https://api.vschool.io/2022/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

//pass data into our function
function listData(data){ 
clearList()
//create for loop to loop over all our elements
for (let i = 0; i < data.length; i++) {

//create new list item
const li=document.createElement('li')
//retrieve my list and append list item to it
document.getElementById('myList').appendChild(li)
//title will be stored in the h1 element
const h1=document.createElement('h1')
h1.textContent=data[i].title
//list iteman will be appended to h1
li.appendChild(h1)


//IMAGES
//create a new image
const images=document.createElement('img')
//images will be set to src and also to the imgURL property
//*image src will be data[i].imgUrl
images.setAttribute("src" ,data[i].imgUrl)
//set size
images.setAttribute("width", "200px")
images.setAttribute("height", "200px")
//image will be apended to li
li.appendChild(images)


//item description
//create a new paragraph
const description=document.createElement('p')
//set description as text content
description.textContent=`Description: ${data[i].description}`
//description will be apended to li
li.appendChild(description)

//set price
//create new paragraph for price
const price=document.createElement('p')
//price content is set to the price via user inputs
price.textContent=`${data[i].price}`
//price will be appended to li
li.appendChild(price)

//checkbox && line through
//completed item variable
const completed=document.createElement('input')
//completed will be set to check box
completed.setAttribute("type","checkbox")
//height and width of checkbox
completed.style.height='20px'
completed.style.width='20px'


//the label that will be by the checkbox
const completedLabel=document.createElement('label')

//the message next to the label
completedLabel.textContent='Check the checkbox if item is Complete'
//font size
completedLabel.style = 'font-size: 20px;'
//label and item appended to page
li.appendChild(completed)
li.appendChild(completedLabel)

//change is fired when an alteration to the element's value is committed by the user
completed.addEventListener('change', function (e) {
    e.preventDefault()
   //if completed is checked then info will be stored in database. marked as true. line though is also added 
    if(this.checked){
    axios.put(`https://api.vschool.io/2022/todo/${data[i]._id}`, { 'completed': true })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    h1.style.textDecoration = 'line-through'
    h1.style.color = 'black'
    //if check mark is not marked then opposite affect
} else {
    axios.put(`https://api.vschool.io/2022/todo/${data[i]._id}`, { 'completed': false })
        .then(res => getData())
        .catch(err => console.log(err))
    h1.style.textDecoration = 'initial'
}
})

//delete buttons
//create a delete button
const deleteItem=document.createElement('button')
//button will say delete
deleteItem.textContent="Delete"
//delete button style
deleteItem.style = 'width: 10%; background-color: red;'
//append delete button to page
li.appendChild(deleteItem)
//delete item function
deleteItem.addEventListener('click',function(e){
e.preventDefault
axios.delete(`https://api.vschool.io/2022/todo/${data[i]._id}`)
.then(res => getData())
.catch(err => console.log(err))
})




}

}
//function that clears our list so we do not have duplicates inputs by removing child element
function clearList(){
    //get our list
    const el=document.getElementById('myList')
    while(el.firstChild){
        //remove child element
        el.removeChild(el.firstChild)
    }



}


//get data
//retrieve form
const todoForm = document["itemForm"]

//when submit button is clicked
todoForm.addEventListener("submit", function (e) {
    e.preventDefault()

       /* class constructor */
 const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imgUrl: todoForm.image.value
}

//set all properties to empty strings
todoForm.title.value = ""
todoForm.price.value = ""
todoForm.description.value = ""
todoForm.image.value = ""
//pass in out new to do into our post request
axios.post("https://api.vschool.io/2022/todo", newTodo)
    .then(res => getData())
    .catch(err => console.log(err))
})





























































