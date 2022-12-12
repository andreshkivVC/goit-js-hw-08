import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmeil: document.querySelector('input[type = "email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
};

savedMessage();

console.log(refs.form);
console.log(refs.inputEmeil);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefaut();
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(formData);
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function savedMessage() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage || '') {
    refs.inputMessage.value = saveMessage.message;
    refs.inputEmeil.value = saveMessage.email;
    console.log(saveMessage.message);
  }
}

function onTextareaInput(evt) {
  let fg = JSON.parse(localStorage.getItem(STORAGE_KEY));

  formData = { ...fg, [evt.target.name]: evt.target.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}