import { domElements } from "./dom-manipulation"

import firebase from "firebase/app";
import "firebase/database";



const cancelText = function() {
  domElements.details.cancelBtn().addEventListener('click', () => {
    domElements.details.textArea().value = "";

    const database = firebase.database();
    let rootRef = database.ref('projects/' + domElements.projectShowcase.projectName().textContent + '/details')
    rootRef.remove();
  })
  
}


const addText = function() {
  domElements.details.addBtn().addEventListener('click', () =>{
    const database = firebase.database();
    let rootRef = database.ref('projects/' + domElements.projectShowcase.projectName().textContent)
    rootRef.update({
        details: domElements.details.textArea().value
    });
  })
  
}

export { cancelText, addText }