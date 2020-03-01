



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





const stepOne = document.querySelector('.stepOne');
const continueBtn = stepOne.querySelector('.stepperForm__button');


// Add Event Listener to submit
continueBtn.addEventListener('click', ()=>{
    // Failed
    if( validate(stepOne) === false){
        // Failed
        console.log('it Failed')


    }else{

        // Passed
        console.log('it passed')


        // Go on to next section
    }

});













// Seclect all sections
const formSections = document.querySelectorAll('.stepperForm__section');

// console.log(formSections);

// // Loog through all sections and find the active one
// formSections.forEach(formSection => {
//     if(formSection.classList.contains('active')){
//         console.log(formSection);
//     }
// });




