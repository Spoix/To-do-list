const domElements = {
    checklist: {
        checklistDelete: document.querySelectorAll(".delete"),
        checklistCheck: document.querySelectorAll(".check"),
        checklistContainer: document.querySelector("#checklist-container"),
        checklistAdd: document.querySelector("#checklist-add")
    },
    projectShowcase: {
        showcaseDisplay: document.querySelector("#showcase-display"),
        selectDetails: document.querySelector("#showcase-details"),
        selectChecklist: document.querySelector("#showcase-checklist"),
        selectHome: document.querySelector("#showcase-home")
    }
}

export { domElements }