
/* Validate  -------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
//  const validate = (element) => {

//     // Get Icon
//     const icon = element.parentElement.parentElement.querySelector('.icon');

//     // If element is not a submit run valibation
//     if(!element.classList.contains('submit-btn')){

//          // Get input value
//         const input = element.parentElement.querySelector('.stepperForm__input');
        
//         // Check if input has been filled in by the user
//         if (input.value.trim() === ""){
//             input.classList.add('validation-error');
//             return false;
//         }else{
//             input.classList.remove('validation-error');
//             icon.innerHTML = '<i class="fas fa-check"></i>';
//             return true;
//         }
//     }
//  };



/* Go Back to last section  ----------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// This function hides or shows a section depending on whether a continue or back button has been clicked 

const changeSection = (buttonThatWasClicked) => {


    // Get the button's (the button passed in) Parent
    const buttonsParent = buttonThatWasClicked.parentElement;

    // Get type for button
    const typeOfButton = buttonThatWasClicked.classList;

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



/* Add Event Listeners to all submit buttons  ----------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Get form buttons
const formButtons = document.querySelectorAll('.stepperForm__button ');

// Add event Listener to all of the form buttons 
formButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Run buttonClicked function and pass in the button that was clicked
        //buttonClicked(button);
        changeSection(button);
    });
});