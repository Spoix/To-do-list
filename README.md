### To do list
This to do list has the visual + DOM in place.

### For futher reference
## Disclaimer
The website is not responsive and was designed just as a mean to test a database management system.

## Webpack workflow and how to run the app
[Check this out](https://github.com/viniciusLiimaa/Webpack-Default-Workflow)

### Useful informations

## Modules
# index.js
Entry point for webpack bundling.

# dom-manipulation.js
Contains the basics DOM queries that are used over and over. The queries are being returned by a function so I don't need to redeclare the queries if, in any moment, the state of the variable changes during the execution of a function.

# custom-listeners.js
Contains a custom listener used to insert the close functionality when the modal to add a project gets opened. This functionality could be add jut by a `click` event, just like it's done with the button to add a project. However I did it this way just to try a different method.

# project-adding.ks
Contains the logic to add a project and inject the info into the DOM. It's using module pattern and factory function as means of encapsulation.

# project-modal-func.js
Everything related to opening the modal to add a project and insert functionalities related to it.

# project-showcase-func.s
Related to changing between the header tabs (home, details and checklist)

# checklist-func.js
Contains everyting related to the functionality of the checklist section of the project.

# details-func.js
Contains the logic to handle the information inserted into the details's textarea, wheter it's to add or cancel the input.

## Styles
# main.scss
It using imports through `@use` in order to gather styles from _[differentNames].scss files. It's the only file being loaded into the browser. The styles contained in each file follows what the file's name suggests.



