import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('[name="email"]')
const messageEl = document.querySelector('[name="message"]')

formEl.addEventListener('input', throttle(addInformationToStorage, 500));
formEl.addEventListener('submit', submitForm);

const STORAGE_KEY = "feedback-form-state";

const storage = {};

function addInformationToStorage(event) {
    // storage[event.target.name] = event.target.value;
    const {name, value} = event.target;

    if (name === emailEl.name) {
        storage.email = value;
        storage.message = messageEl.value;
      };
    
    if (name === messageEl.name) {
        storage.message = value;
        storage.email = emailEl.value;
      };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function submitForm(event) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function getStorageValues() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY))

     if(storageData) {
        formEl.email.value = storageData.email || '';
        formEl.message.value = storageData.message || '';
        console.log(storageData);
     };
 }
getStorageValues();
