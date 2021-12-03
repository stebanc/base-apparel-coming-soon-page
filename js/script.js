const form = document.getElementById('form');
const email = document.getElementById('email');

const emailIsValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const emailValidator = (e) => {
  if (!emailIsValid.test(e.value.trim())) {
    e.classList.add('form__email--is-invalid');
    console.log('invalid', e);
  } else {
    e.classList.remove('form__email--is-invalid');
    form.reset();
    e.focus();
    console.log('valid', e);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  emailValidator(email);
});