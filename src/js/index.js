import "../styles/main.scss"
import { showDetails, showChecklist, showHome } from './project-showcase-func'
import { openModal } from './project-modal-func'

import './services/firebase'




(function projectShowcaseFunc() {
    showDetails();
    showChecklist();
    showHome();
})();

(function projectListingFunc() {
    openModal();
})();







