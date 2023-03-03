import throttle  from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form')

emailInput.addEventListener('input', throttle(saveStateToLocalStorage, 500));
messageInput.addEventListener('input', throttle(saveStateToLocalStorage, 500));

window.addEventListener('load', () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = state.email || '';
  messageInput.value = state.message || '';
});
function saveStateToLocalStorage() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(
    'Form submitted with state:',
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
