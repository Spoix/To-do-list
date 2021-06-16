import { domElements } from "./dom-manipulation"

const openModal = function() {
    domElements.projectListing.openModal().addEventListener('click', () => {
        // domElements.baseElements.body().style.opacity = "0.4"
        domElements.baseElements.body().classList.add("soft-fade")
        domElements.baseElements.body().classList.remove("remove-fade")
        const modalBox = document.createElement("div");
        modalBox.id = "add-project-modal"
        modalBox.innerHTML = `
        <div class="modal-content">
            <div id="modal-title">
                <span>Project info</span>
                <i id="close-modal" class="fas fa-times fa-2x"></i>
            </div>
            <div id="modal-inputs">
                <label for="title" class="input-label">Title</label>
                <input type="text" id="title" class="input-field">
                <label for="due-date" class="input-label">Due date</label>
                <input type="text" id="due-date" class="input-field">
                <label for="priority" class="input-label">Priority</label>
                <input type="text" id="priority" class="input-field">
            </div>
        <button class="modal-btn" id="add-project">Add</button>
        </div>
        `
        domElements.baseElements.html().appendChild(modalBox);
        closeModal();
        
    })
}

const closeModal = function() {
    const closeBtn = document.querySelector("#close-modal");
    closeBtn.addEventListener('click', () => {
        domElements.baseElements.body().classList.add("remove-fade")
        domElements.baseElements.body().classList.remove("soft-fade")
        closeBtn.parentElement.parentElement.parentElement.remove();
    })
}

export { openModal }