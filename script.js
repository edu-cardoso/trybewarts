const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const signInBtn = document.getElementById('sign-in-btn');
const validEmail = 'tryber@teste.com';
const validPassword = '123456';

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
