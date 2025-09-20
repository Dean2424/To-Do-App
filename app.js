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
const clearAllBtn = document.getElementById("clear-btn");

// Event Listeners
addItemForm.addEventListener("submit", addItem);
ulEl.addEventListener("click", handleListClick);
clearAllBtn.addEventListener("click", clearAll);
filterInput.addEventListener("input", filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
    const inputValue = itemInput.value.trim();
    if (inputValue === "") {
        alert("Please Add Text!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Add input value as a text node
    const textNode = document.createTextNode(inputValue + " ");
    li.appendChild(textNode);

    // Create date span
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const dateSpan = document.createElement("span");
    dateSpan.className = "item-date";
    dateSpan.textContent = dateString;
    dateSpan.style.marginLeft = "10px";
    dateSpan.style.fontSize = "0.9em";
    dateSpan.style.color = "#888";
    li.appendChild(dateSpan);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.className = "delete-btn";

    // Create Icon in button
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark fa-2xl";
    deleteBtn.appendChild(icon);
    li.appendChild(deleteBtn);

    ulEl.appendChild(li);

    // Clear Input
    itemInput.value = "";
}

// Handle clicks for delete and complete
function handleListClick(e) {
    // Mark as completed if clicking on li (not button or icon)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        return;
    }
    // Delete item if clicking on delete button or icon
    if (
        (e.target.tagName === "BUTTON" && e.target.classList.contains("delete-btn")) ||
        (e.target.tagName === "I" && e.target.parentNode.classList.contains("delete-btn"))
    ) {
        const li = e.target.closest("li");
        if (li) ulEl.removeChild(li);
    }
}

// Clear all items
function clearAll() {
    ulEl.innerHTML = "";
}

// Filter items
function filterItems() {
    const filterText = filterInput.value.toLowerCase();
    const items = ulEl.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        let itemText = items[i].firstChild.textContent.toLowerCase();
        if (itemText.includes(filterText)) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}