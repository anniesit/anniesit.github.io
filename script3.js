var enter = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var listItems = document.querySelectorAll("li");
var doneBut = document.querySelector(".doneButton");
var listTitle = document.querySelector("#listTitle");
var titleDiv = document.querySelector("#titleDiv");
var titleInput = document.querySelector("#titleInput");
var titleEnter = document.querySelector("#titleEnter");
// console.log(titleEnter);
function check() {
	console.log("check");
}

//Add button
function delItem() {
	event.target.parentElement.remove();
}
function putDiv() {
	div.classList.add("liDiv");
	ul.appendChild(div);
}
function setupButton() {
	button.classList.add("delButton");
	button.innerHTML = "delete";
	button.addEventListener("click", delItem)
}
for (i=0; i<listItems.length; i++) {
	var div = document.createElement("div");
	putDiv();
	div.appendChild(listItems[i]);
	var button = document.createElement("button");
	setupButton();
	div.appendChild(button);
}

//Create new list item
function inputLength() {
	return input.value.length;
} // (??????why putDiv & setupButton don't work below?)
function createListItem() {
	var div = document.createElement("div");
	//putDiv
	div.classList.add("liDiv");
	ul.appendChild(div);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	div.appendChild(li);
	var button = document.createElement("button");
	//setupButton
	button.classList.add("delButton");
	button.innerHTML = "delete";
	button.addEventListener("click", delItem)
	div.appendChild(button);
	//hover display
	var div = document.querySelectorAll(".liDiv");
	for (i=0; i<div.length; i++) {
	div[i].addEventListener("mouseenter", () => {
		event.target.children[1].style.display = "block";
	})
	div[i].addEventListener("mouseleave", () => {
		event.target.children[1].style.display = "none";
	})}
}
function addListByClick() {
	if (inputLength() > 0) {
		createListItem ();
	}
}
function addListByEnter() {
 	if (inputLength() > 0 && event.which == 13) {
 		createListItem ();
	}
}

enter.addEventListener("click", addListByClick);

input.addEventListener("keypress", addListByEnter);

//Cross out done items
var div = document.querySelectorAll(".liDiv");
for (i=0; i<listItems.length; i++) {
	listItems[i].addEventListener("click", () => {
		event.target.classList.toggle("done");
	})
}
for (i=0; i<div.length; i++) {
	div[i].addEventListener("mouseenter", () => {
		event.target.children[1].style.display = "block";
	})
	div[i].addEventListener("mouseleave", () => {
		event.target.children[1].style.display = "none";
	})
}

//Done Button
function delAll() {
	var liDiv = document.querySelectorAll(".liDiv");
	for (i=0; i<liDiv.length; i++) {
		liDiv[i].remove();
	}
}
doneBut.addEventListener("click", delAll);

//Title Changer
function editMode() {
	titleInput.placeholder = listTitle.innerHTML;
	listTitle.style.display = "none";
	titleDiv.style.display = "block";
}
listTitle.addEventListener("click", editMode);
function showTitle() {
	titleDiv.style.display = "none";
	listTitle.style.display = "block";
}
function titleLength() {
	return titleInput.value.length;
}
function saveByClick() {
	if (titleLength() === 0) {
		showTitle();
	} else {
		listTitle.innerHTML = titleInput.value;
		showTitle();
	}
}
function saveByEnter() {
	if (titleLength() === 0 && event.which === 13) {
		showTitle();
	} else if (titleLength() > 0 && event.which === 13) {
		listTitle.innerHTML = titleInput.value;
		showTitle();
	}
}
titleEnter.addEventListener("click", saveByClick);
titleInput.addEventListener("keypress", saveByEnter);









