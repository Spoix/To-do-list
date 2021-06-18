import { modalWarning } from './project-modal-func'
import { domElements } from './dom-manipulation'


const projectAdding = (() => {

    const projectFactory = (title, dueDate, priority) => {
    
        let newProject = {}

        const buildProject = () => {
            newProject = {
                projectTitle: title,
                projectDueDate: dueDate,
                projectPriority: priority
            }

            projectDOM.injectProject();

        }
    
        const projectDOM = (() => {

            let projectListingElm;
            let projectNameElm;
            let projectDueDateElm;
            let projectPriorityElm;
            let lineBreak;

            const injectProject = () => {
                domCreation();
                domInsertion();
            }

            const domCreation = () => {
                console.log("it ran")
                // Project title in the listing panel
                projectListingElm = document.createElement('span');
                lineBreak = document.createElement("br")
                projectListingElm.classList.add("projectItem");
                projectListingElm.textContent = newProject.projectTitle;
                // Project name in the showcase
                projectNameElm = document.createElement('span');
                projectNameElm.classList.add("projectItem", "projectName");
                projectNameElm.textContent = newProject.projectTitle;
                // Project dueDate in the showcase
                projectDueDateElm = document.createElement('span');
                projectDueDateElm.classList.add("projectItem" , "projectDueDate");
                projectDueDateElm.textContent = newProject.projectDueDate;
                // Project priority in the showcase
                projectPriorityElm = document.createElement('span');
                projectPriorityElm.classList.add("projectItem", "projectPriority");
                projectPriorityElm.textContent = newProject.projectPriority;
            }

            const domInsertion = () => {
                console.log("it ran")
                // Insert project title in the listing panel
                domElements.projectListing.list().appendChild(projectListingElm);
                domElements.projectListing.list().appendChild(lineBreak);
                
                // Insert project name in the showcase
                domElements.projectShowcase.projectName().textContent = projectNameElm.textContent;
                // Insert projectDueDate in the showcase
                domElements.projectShowcase.projectDueDate().textContent = projectDueDateElm.textContent;
                // Insert projectPriority in the showcase
                domElements.projectShowcase.projectPriority().textContent = projectPriorityElm.textContent;
            }

            return {
                injectProject
            }

        })();


        return {
            buildProject
        }
    
    }


    const addProject = function() {
        if ((domElements.projectModal.projectTitle().value.length != 0) &&
        (domElements.projectModal.projectDueDate().value.length != 0) &&
        (domElements.projectModal.projectPriority().value.length != 0)) {
            modalWarning.removeWarning();
            projectFactory(domElements.projectModal.projectTitle().value, domElements.projectModal.projectDueDate().value, domElements.projectModal.projectPriority().value).buildProject()
            
        } else {
            modalWarning.addWarning();
        }
    }

    return {
        addProject
    }


})();




export { projectAdding }