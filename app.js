
// Select all sections
const formSections = document.querySelectorAll('.stepperForm__section');

// Current section
// This will be use to keep that on what section we need to show
let currentSection = 1;


/* Validate Function------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// This Function checks if a section on the form has been filled in correctly
const validate = (item) => {
    // get input
    const itemInput = item.querySelector('.stepperForm__input');

    // Get Label
    const itemLable = item.querySelector('.stepperForm__label');

        // If input is email validate it
        if(itemInput.value === ""){

            // Update label styles
            itemLable.classList.add('label-error');
            itemLable.classList.remove('label-pass');


            // Update input styles
            itemInput.classList.add('input-error');
            itemInput.classList.remove('input-pass');

            return false;
        }else{
            // Update label styles
            itemLable.classList.remove('label-error');
            itemLable.classList.add('label-pass');


            // Update input styles
            itemInput.classList.add('input-pass');
            itemInput.classList.remove('input-error');

            return true;
        }
       

};


/* Change Icon-------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
const updateIcon = (item) => {

    // Get Icon Class
    const targetIcon = item.querySelector('.icon');

    // Add class
    targetIcon.classList.add('icon-complete');

    // Change Icon
    targetIcon.innerHTML = '<i class="fas fa-check"></i>';


};



/* Move To Next Section Function------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const moveToNextSection = () => {

    let counter = 0;
    currentSection ++;

    // loop trough all sections
    formSections.forEach(formSection => {
    
        // Remove active class
        formSection.classList.remove('active');

        // Add inactive class
        formSection.classList.add('inactive');

        // Add one to counter
        counter ++;

        // This will give use are new current section
        if(counter === currentSection){
            formSection.classList.add('active');
            formSection.classList.remove('inactive');
        }

    });
};



/* Continue Buttons Event listeners --------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


const continueButtons = document.querySelectorAll('.continue-btn').forEach(button => {

    // Add an event listener to all continue-btn
    button.addEventListener('click', () => {

        // Get Parent Div
        const section = button.parentElement.parentElement;

        // If the parentElement has the active class and it not the last section
        if(section.classList.contains('active')){


            if(button.classList.contains('submit')){ // If Button is the submit just update the icon

                 // Update Sections Icon
                 updateIcon(section);

            }else if(validate(section)){ // Run vailadtion an check if its passed 

                // Update Sections Icon
                updateIcon(section);

                // Move to next section
                moveToNextSection();
            }

        }
    });
});
