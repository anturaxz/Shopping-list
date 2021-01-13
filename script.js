var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var stripe = document.querySelectorAll('.stripe');
var deleteThis = document.querySelectorAll('.delete');
var count = 0;



purchasingList()

// Line-trough for existing li elements

stripe.forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle("done");

  })
})

// delete existing elements
deleteThis.forEach(item => {
  item.addEventListener('click', event => {
    item.parentNode.parentNode.removeChild(item.parentNode);
   	purchasingList()
  })
})

function inputLength(){
	return input.value.length > 0;
}

//create a new list element.

function createListElement(){
	count ++;
	var li = document.createElement("li");
	li.id = "li"+count;
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	deleteItem = document.createElement("button");
	deleteItem.id = "del"+count;
	deleteItem.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteItem);
	li.classList.add("flex");
	console.log(deleteItem);
	var idLi = document.getElementById("li"+count);
	var idDelete = document.getElementById("del"+count);
	idLi.addEventListener('click', event => {
    idLi.classList.toggle("done");
  })
	idDelete.addEventListener("click" , event => {
    idDelete.parentNode.parentNode.removeChild(idDelete.parentNode);
    purchasingList()
})
	purchasingList()
}

function addItemAfterPress(event){
	if (inputLength() && event.keyCode === 13) {
	createListElement();
	}
}

function addItemAfterClick(){
	if (inputLength()) {
		createListElement();
	}
}

function purchasingList(){
	listItems = ul.childElementCount;
    document.getElementById("quantity").innerHTML = listItems;

}
input.addEventListener("keypress", addItemAfterPress);

button.addEventListener("click", addItemAfterClick);