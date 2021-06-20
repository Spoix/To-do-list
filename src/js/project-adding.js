import { modalWarning } from './project-modal-func';
import { domElements } from './dom-manipulation';
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDxDhzDuBK-v5DBJ3izN-FcpiztI_xHmyo",
    authDomain: "todolist-bf4c5.firebaseapp.com",
    databaseURL: "https://todolist-bf4c5-default-rtdb.firebaseio.com",
    projectId: "todolist-bf4c5",
    storageBucket: "todolist-bf4c5.appspot.com",
    messagingSenderId: "608911971998",
    appId: "1:608911971998:web:d31585215d68d99eee8d8f",
    measurementId: "G-GF0ERWFPLR"
});


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
            projectDB.writeProject();

        }

        const projectDB = (() => {

            const writeProject = () => {
                const database = firebase.database();
                const rootRef = database.ref('projects')

                rootRef.child(newProject.projectTitle).set({
                    title: newProject.projectTitle,
                    dueDute: newProject.projectDueDate,
                    priority: newProject.projectPriority
                });
            }

            return {
                writeProject
            }

        })();
    
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