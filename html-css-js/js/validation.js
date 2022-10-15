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
const btn = document.querySelector(".btn");

const checkForm = () =>{
    event.preventDefault()
    if(nameInput.value == "" && lastNameInput.value == "" && emailInput.value == ""){
        console.log("Puste inputy");
    }else if(nameInput.value == "" || lastNameInput.value == "" || emailInput.value == "" ){
        let allInputValues = []
        allInputValues.push(nameInput)
        allInputValues.push(lastNameInput)
        allInputValues.push(emailInput)
        for(i of allInputValues){
            if(i.value == ""){
                console.log(i);
            }
        }
    }
    

}