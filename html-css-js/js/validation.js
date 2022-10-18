/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const nameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const checkboxes = document.querySelectorAll('input[type=checkbox]')

const checkForm = () =>{
    event.preventDefault()
    if(nameInput.value == "" && lastNameInput.value == "" && emailInput.value == ""){
        alert("You cannot leave the input empty!!")
    }else if(nameInput.value == "" || lastNameInput.value == "" || emailInput.value == "" ){
        let allInputValues = []
        allInputValues.push(nameInput)
        allInputValues.push(lastNameInput)
        allInputValues.push(emailInput)
        for(i of allInputValues){
            if(i.value == ""){
                alert("One of the inputs are empty. Please fill all of them.");
                break;
            }
        }
    }

    let checkedCheckbox = []
    for(check of checkboxes){
        if(check.checked){
            checkedCheckbox.push(document.querySelector(`#${check.id}`).checked)
        }
    };
    if(checkedCheckbox.length == 0){
        alert("You must select one thing");
    }
}