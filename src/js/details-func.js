import { domElements } from "./dom-manipulation"

const cancelText = function() {
  domElements.details.cancelBtn().addEventListener('click', () => domElements.details.textArea().value = "")
}


const addText = function() {
  domElements.details.addBtn().addEventListener('click', () => alert("Your info will be updated in the database"))
}

export { cancelText, addText }