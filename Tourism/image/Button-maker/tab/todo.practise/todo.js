let todoItemsContainer = document.getElementById("todoItemContainer");

let todoElement = document.createElement("li");
todoElement.classList("todo-item-container", "d-flex", "flex-row");

todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbpx";
inputElement.id = "checkboxInput";
inputElement.classList.add("checkbox-input");

todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-container");

labelElement.appendChild(labelContainer);
