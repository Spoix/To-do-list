import { modalWarning } from './project-modal-func'
import { domElements } from './dom-manipulation'

const projectFactory = (title, dueDate, priority) => {
    
}

const addProject = function() {
    if ((domElements.projectModal.projectTitle().value.length != 0) &&
    (domElements.projectModal.projectDueDate().value.length != 0) &&
    (domElements.projectModal.projectPriority().value.length != 0)) {
        modalWarning.removeWarning();
        console.log("working");
        
    } else {
        modalWarning.addWarning();
    }
}

export { addProject }