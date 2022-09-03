import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')

formEl.addEventListener('input', throttle(addInformationToStorage, 500));
formEl.addEventListener('submit', submitForm);

const STORAGE_KEY = "feedback-form-state";

// const values = JSON.parse(localStorage.getItem(STORAGE_KEY))
// console.log(values);
const storage = {};

function getStorageValues() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
 
     if(storageData) {
         formEl.email.value = storageData.email;
         formEl.message.value = storageData.message;
         console.log(storageData);
     }
 }
getStorageValues();

function addInformationToStorage(event) {
    storage[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function submitForm(event) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
}


