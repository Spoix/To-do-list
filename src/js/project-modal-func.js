import { domElements } from "./dom-manipulation";
import { customListeners } from './custom-listeners'
import { projectAdding } from './project-adding'

const openModal = function() {
    domElements.projectListing.openModal().addEventListener('click', () => {
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
                <input type="text" id="modal-input-title" class="input-field">
                <label for="due-date" class="input-label">Due date</label>
                <input type="text" id="modal-due-date" class="input-field">
                <label for="priority" class="input-label">Priority</label>
                <input type="text" id="modal-priority" class="input-field">
            </div>
        <button class="modal-btn" id="add-project">Add</button>
        </div>
        `
        domElements.baseElements.html().appendChild(modalBox);

        domElements.baseElements.html().addEventListener('modal', closeModal());
        modalBox.dispatchEvent(customListeners.modalCreated())

        domElements.projectModal.addBtn().addEventListener('click', projectAdding.addProject)
        
    })
}

const closeModal = function() {
    domElements.projectModal.closeBtn().addEventListener('click', () => {
        domElements.baseElements.body().classList.add("remove-fade")
        domElements.baseElements.body().classList.remove("soft-fade")
        domElements.projectModal.closeBtn().parentElement.parentElement.parentElement.remove();
    })
}

const modalWarning = (() => {

    const addWarning = function() {
        if (document.querySelector(".warning") == null) {
            const alert = document.createElement("p");
            alert.classList.add("warning")
            alert.style.color = "red";
            alert.style.fontSize = "1.2rem";
            alert.style.marginBottom = "-2.5rem";
            alert.textContent = "Please fill out the fields"
            domElements.projectModal.modalContent().appendChild(alert)
        } else {
            return
        }    
    }

    const removeWarning = function () {
        if (document.querySelector(".warning") != null) {
            document.querySelector(".warning").remove()
        }
    }

    return {
        addWarning,
        removeWarning
    }

})();


export { modalWarning }














export { openModal }