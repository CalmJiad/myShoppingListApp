let input = document.getElementById("input");
let button = document.getElementById("button");
let listItems = document.getElementById("listitems");
let lis = document.querySelectorAll("li");
let rmvallbtn = document.querySelector(".rmvallbtn");



button.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = input.value;
  const newBtn = document.createElement('i');
  newBtn.className = "icon far fa-times-circle";
  newItem.appendChild(newBtn);
  listItems.appendChild(newItem);
  input.value = "";
});

input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(input.value));
    const newBtn = document.createElement('i');
    newBtn.className = "icon far fa-times-circle";
    newItem.appendChild(newBtn);
    listItems.appendChild(newItem);
    input.value = "";
  }
})

//removing single items
function removeItem(event) {
  let item = event.target;
  if(item.classList.contains("icon")){
    item.parentElement.remove();
  }
}

document.querySelector('body').addEventListener("click", removeItem);


//done underline
listItems.addEventListener("click", function(event){
 if(event.target.parentElement.parentElement === rmvallbtn.parentElement){
   event.target.classList.toggle("done");
  console.log(event.target);
 };
});

//remove all items
function rmvitems() {
  lis.forEach(function(li) {
    li.remove();
  })
  // listItems.innerHTML = "";
}

rmvallbtn.addEventListener("click", function(){
  listItems.innerHTML = "";
});