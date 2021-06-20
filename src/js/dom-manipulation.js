const domElements = {
    baseElements: {
        body: () => {
            return document.querySelector("body")
        },
        html: () => {
            return document.querySelector("html")
        },
    },
    checklist: {
        checklistDelete: () => {
            return document.querySelectorAll(".delete")
        },
        checklistCheck: () => {
            return document.querySelectorAll(".check")
        },
        checklistContainer: () => {
            return document.querySelector("#checklist-container")
        },
        checklistAdd: () => {
            return document.querySelector("#checklist-add")
        }
    },
    details: {
        textArea: () => {
            return document.querySelector("textarea")
        },
        addBtn: () => {
            return document.querySelectorAll(".details-button")[0]
        },
        cancelBtn: () => {
            return document.querySelectorAll(".details-button")[1]
        }
    },
    projectShowcase: {
        showcaseDisplay: () => {
            return document.querySelector("#showcase-display")
        },
        selectDetails: () => {
            return document.querySelector("#showcase-details")
        },
        selectChecklist: () => { 
            return document.querySelector("#showcase-checklist")
        },
        selectHome: () => { 
            return document.querySelector("#showcase-home")
        },
        projectName: () => {
            return document.querySelector("#project-name")
        },
        projectDueDate: () => {
            return document.querySelector("#due-date").children[1]
        },
        projectPriority: () => {
            return document.querySelector("#priority").children[1]
        }
    },
    projectListing: {
        list: () => {
            return document.querySelector("#list")
        }, 
        openModal: () => {
            return document.querySelector("#project-listing").children[1]
        }
    },
    projectModal: {
        modalContent: () => {
            return document.querySelector(".modal-content")
        },
        closeBtn: () => {
            return document.querySelector("#close-modal")
        },
        addBtn: () => {
            return document.querySelector("#add-project")
        },
        projectTitle: () => {
            return document.querySelector("#modal-input-title")
        },
        projectDueDate: () => {
            return document.querySelector("#modal-due-date")
        },
        projectPriority: () => {
            return document.querySelector("#modal-priority")
        }
    }
}

export { domElements }