/*

Steps for success

1. Add items from the input field when add item button is clicked.

2. Delete items when x icon is clicked.

3. Clear all items when clear all is clicked.

4. Filter items by character in the filter input and have relevant items appear in the ul.

*/


// DOM Elements
const addItemForm = document.getElementById("add-item-form");
const itemInput = document.getElementById("item-input");
const filterInput = document.getElementById("filter-input");
const ulEl = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item");
const clearAllBtn = document.getElementById("clear-btn");

// Event Listeners
addItemForm.addEventListener("submit", addItem);
ulEl.addEventListener("click", deleteItem);
clearAllBtn.addEventListener("click", clearAll);
filterInput.addEventListener("input", filterItems);


//Mark as completed
ulEl.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});

// Functions
function addItem (e) {

e.preventDefault();

const inputValue = itemInput.value.trim();

if (inputValue === "") {
    alert("Please Add Text!");
    return;
    }

//Create list item with JS dynamically
const li = document.createElement("li");

// Get current date
    const now = new Date();
const dateString = now.toLocaleDateString();

//Add input value to li
li.textContent = itemInput.value + " ";

//Create date span
const dateSpan = document.createElement("span");
dateSpan.className = "item-date";
dateSpan.textContent = dateString;
dateSpan.style.marginLeft = "10px";
dateSpan.style.fontSize = "0.9em";
dateSpan.style.color = "#888";

li.appendChild(dateSpan);

//Create delete button
const deleteBtn = document.createElement("button");
deleteBtn.setAttribute("type", "button");
deleteBtn.className = "delete-btn";

//Create Icon in button
const icon = document.createElement("i");
icon.className = "fa-solid fa-xmark fa-2xl";

//Add all elements together to create li and add it to the ul
deleteBtn.appendChild(icon);
li.appendChild(deleteBtn);
ulEl.appendChild(li);

//Clear Input
itemInput.value = "";
};

function deleteItem (e) {

let target = e.target;

if(target.tagName === "I" && target.parentNode.className === "delete-btn") {

let listItem = target.parentNode.parentNode;
ulEl.removeChild(listItem);

} else if(target.tagName === "BUTTON" && target.className === "delete-btn") {
    listItem.parentNode;
    ulEl.removeChild(listItem);
    }
};

function clearAll () {

while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild)
    }
};

function filterItems () {

const filterText = filterInput.value.toLowerCase();
const items = ulEl.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {

    let itemText = items[i].firstChild.textContent.toLowerCase()

if(itemText.includes(filterText)) {

items[i].style.display = "flex";

} else {

items[i].style.display = "none";

}

    }
};
