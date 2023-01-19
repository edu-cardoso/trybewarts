const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const signInBtn = document.getElementById('sign-in-btn');
const validEmail = 'tryber@teste.com';
const validPassword = '123456';
const textarea = document.getElementById('textarea');
const charQuantity = document.getElementById('char-quantity');
const submitBtn = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');

function validateLoginForm() {
  signInBtn.addEventListener('click', () => {
    if (emailInput.value === validEmail && passwordInput.value === validPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

validateLoginForm();

function enableSubmitBtn() {
  agreementCheckbox.addEventListener('click', () => {
    if (agreementCheckbox.checked === true) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
}

enableSubmitBtn()

function amountOfCharactersTyped() {
  textarea.onfocus = () => {
    let interval = setInterval(() => {
      charQuantity.innerText = 500 - textarea.value.length;
    }, 100)
    textarea.onblur = () => {
      clearInterval(interval);
    }
  }
}

amountOfCharactersTyped()





