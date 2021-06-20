import { domElements } from "./dom-manipulation"
import { deleteItem, checkItem, addItem } from './checklist-func'
import { cancelText, addText } from './details-func'



const showDetails = function () {
    domElements.projectShowcase.selectDetails().addEventListener("click", () => {
        domElements.projectShowcase.showcaseDisplay().classList.remove("home-image")
        domElements.projectShowcase.showcaseDisplay().innerHTML = `
        <div id="showcase-header">
            <span>Project details</span>
        </div>
        <div id="showcase-display-content">
            <textarea></textarea>
            <div id="button-area">
                <button type="button" class="details-button">CONFIRM</button>
                <button type="button" class="details-button">CANCEL</button>
            </div>
        </div> 
        `
    cancelText();
    addText();
    });
};

const showChecklist = function () {
    domElements.projectShowcase.selectChecklist().addEventListener("click", () => {
        domElements.projectShowcase.showcaseDisplay().classList.remove("home-image")
        domElements.projectShowcase.showcaseDisplay().innerHTML = `
        <div id="showcase-header">
            <span>Project checklist</span>
        </div>
        <button type="button" id="checklist-add">Add</button>
        <div id="checklist-container"></div>
        `
        deleteItem();
        checkItem();
        addItem();
    })
}

const showHome = function () {
    domElements.projectShowcase.selectHome().addEventListener("click", () => {
        domElements.projectShowcase.showcaseDisplay().innerHTML = `
        <div id="showcase-header">
            <span>Helping you to be more productive</span>
        </div>
        `
        domElements.projectShowcase.showcaseDisplay().classList.add("home-image")
    })
}




export { showDetails, showChecklist, showHome }