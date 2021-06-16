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
        }
    },
    projectListing: {
        openModal: () => {
            return document.querySelector("#project-listing").children[1]
        }
    }
}

export { domElements }