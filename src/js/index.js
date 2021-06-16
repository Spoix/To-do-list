import "../styles/main.scss"
import { showDetails, showChecklist, showHome } from './project-showcase-func'


import { addProject, openModal } from './add-project'

(function projectShowcaseFunc() {
    showDetails();
    showChecklist();
    showHome();
})();

(function projectListingFunc() {
    openModal();
})();






