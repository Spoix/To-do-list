import { domElements } from "./dom-manipulation"

const deleteItem = function () {
    if (domElements.checklist.checklistDelete.length > 0) {
        domElements.checklist.checklistDelete.forEach((element) => {
            element.addEventListener("click", () => {
                element.parentElement.remove()
            })
        })
    }
}

const checkItem = function () {
    if (domElements.checklist.checklistCheck.length > 0) {
        domElements.checklist.checklistCheck.forEach((element) => {
            element.addEventListener("click", () => {
                if (element.previousElementSibling.value.length > 0) {
                    element.previousElementSibling.classList.toggle("check-text-toggled")
                }
            })
        })
    }
}

const addItem = function () {
    domElements.checklist.checklistAdd = document.querySelector("#checklist-add");
    domElements.checklist.checklistAdd.addEventListener('click', () => {
        const checklistItem = document.createElement("div");
        checklistItem.classList.add("checklist-item");
        checklistItem.innerHTML = `
        <i class="fas fa-clipboard-list fa-2x"></i>
        <input class="checklist-item-text" type="text" placeholder="Checklist item">
        <i class="far fa-check-square fa-2x check"></i>
        <i class="far fa-times-circle fa-2x delete"></i>
        `;
        domElements.checklist.checklistContainer = document.querySelector("#checklist-container");
        domElements.checklist.checklistContainer.appendChild(checklistItem);
        domElements.checklist.checklistDelete = document.querySelectorAll(".delete");
        domElements.checklist.checklistCheck = document.querySelectorAll(".check");
        checkItem();
        deleteItem();
    });
    
    
}


export { deleteItem, checkItem, addItem }