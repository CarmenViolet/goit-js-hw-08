import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')

formEl.addEventListener('input', throttle(addInformationToStorage, 500));
formEl.addEventListener('submit', submitForm);

const STORAGE_KEY = "feedback-form-state";

const storage = {};
function addInformationToStorage(event) {
    storage[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function submitForm(event) {
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function getStorageValues() {
    // const values = {};
   const values = JSON.stringify( localStorage.getItem(STORAGE_KEY));
   console.log(values);

//    const email = document.querySelector('input[type="email"]');
//    const message = document.querySelector('input[type="submit"]);

//     if(values) {
//         email.value = values.email;
//         message.value = values.message;
//         console.log(values);
//     }
}