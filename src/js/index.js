import "../styles/main.scss"
import { showDetails, showChecklist, showHome } from './project-showcase-func'


import { addProject } from './add-project'

(function projectShowcaseFunc() {
    showDetails();
    showChecklist();
    showHome();
})();


addProject()



