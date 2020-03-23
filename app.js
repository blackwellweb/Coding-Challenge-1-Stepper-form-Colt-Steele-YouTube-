
/* Change Section  -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// This function hides or shows a section depending on whether a continue or back button has been clicked 

const changeSection = (button) => {


    // Get the button's (the button passed in) Parent
    const buttonsParent = button.parentElement;

    // Get type for button
    const typeOfButton = button.classList;

    // Get all the formSections
    const formSections = document.querySelectorAll('.stepperForm__sectionInputs');

    // Convert formSections  NodeList to an array
    const formSectionsArr = Array.from(formSections);

    // Loop over the array 
     formSectionsArr.forEach((section) => {


        // Remove current classes
        section.classList.remove('stepperForm__sectionInputs--show');
        section.classList.remove('stepperForm__sectionInputs--hide');


         // If typeOfButton is continue and the indexOf the current section is equal to the index of the buttonsParent +1, show that section
        if(typeOfButton.contains('continue-btn') && formSectionsArr.indexOf(section) === formSectionsArr.indexOf(buttonsParent)+1){
            section.classList.add('stepperForm__sectionInputs--show');

        // Else if typeOfButton is back and the indexOf the current section is equal to the index of the buttonsParent -1, show that section
        } else if(typeOfButton.contains('back-btn') && formSectionsArr.indexOf(section) === formSectionsArr.indexOf(buttonsParent)-1){
            section.classList.add('stepperForm__sectionInputs--show');
        }else {
             // Hide that section
            section.classList.add('stepperForm__sectionInputs--hide');
        }
    });
};




/* Validate  -------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


const validate = (buttonThatWasClicked) => {

     // Get Icon
    const icon = buttonThatWasClicked.parentElement.parentElement.querySelector('.icon');

    // Check the type of Button
    if(buttonThatWasClicked.classList.contains('continue-btn')){

        // Get input value
        const input = buttonThatWasClicked.parentElement.querySelector('.stepperForm__input');
        
        // Check if input is empty 
        if(input.value.trim() === ""){
            input.classList.add('validation-error');
            icon.classList.remove('validation-passed')
        }else {

            // If not empty change remove error and change icon to a tick
            input.classList.remove('validation-error');
            icon.classList.add('validation-passed')
            icon.innerHTML = '<i class="fas fa-check"></i>';

            // Go to next section
            changeSection(buttonThatWasClicked);
        }
      
    } else {

        // If not a continue-btn, the button will be a submit or back, so no need to run Validation
        changeSection(buttonThatWasClicked)
    }

};



/* Add Event Listeners to all submit buttons  ----------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Get form buttons
const formButtons = document.querySelectorAll('.stepperForm__button ');

// Add event Listener to all of the form buttons 
formButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Run buttonClicked function and pass in the button that was clicked
        validate(button);
        //changeSection(button);
    });
});