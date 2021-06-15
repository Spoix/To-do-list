import { domElements } from "./dom-manipulation"

const addProject = function() {
    domElements.projectListing.addProject().addEventListener('click', () => {
        alert("ok")
    })
}

export { addProject }