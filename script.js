const form = document.getElementById('form');
form.addEventListener('submit', change);



const inputName = document.querySelector('.form__name');
const inputMail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__pass')
const inputPasswordConfirm = document.querySelector('.form__pass2');
const radioButtons = document.querySelectorAll(
   'input[type="radio"][name="gender"]'
);
//функция проверки поля имени
function checkValidityName() {
   let validity = inputName.validity;
   let reg = /^[a-zA-ZА-Яа-я]+$/;
   let error = document.querySelector('.error-name');
   let res = reg.test(inputName.value)
   if (!res) {
      inputName.classList.add('red__line');
      error.textContent = 'Неверный формат';
   }
   else if (validity.valueMissing) {
      inputName.classList.add('red__line');
      error.textContent = 'Необходимо заполнить поле';
   }
   else {
      inputName.classList.add('green__line');
      inputName.classList.remove('red__line');
      error.textContent = '';
   }
}
//функция проверки поля Email
function checkValidityEmail() {
   let validityMail = inputMail.validity;
   let error = document.querySelector('.error-mail');
   if (validityMail.valueMissing) {
      inputMail.classList.add('red__line');
      error.textContent = 'Необходимо заполнить поле';
   }
   else {
      inputMail.classList.add('green__line');
      inputMail.classList.remove('red__line');
      error.textContent = '';
   }
}

//функция проверки поля  пароль
function checkValidityPassword() {
   let errorPass = document.querySelector('.error-password');
   if (inputPassword.value !== inputPasswordConfirm.value) {
      errorPass.textContent = 'Пароли не совпадают';
      inputPassword.classList.add('red__line');
      inputPasswordConfirm.classList.add('red__line');
   } else if (
      inputPassword.value.length < 8 ||
      inputPasswordConfirm.value.length < 8
   ) {
      errorPass.textContent = 'Пароль должен быть не менее 8 символов';
      inputPassword.classList.add('red__line');
      inputPasswordConfirm.classList.add('red__line');
   } else {
      inputPassword.classList.add('green__line');
      inputPassword.classList.remove('red__line');
      inputPasswordConfirm.classList.add('green__line');
      inputPasswordConfirm.classList.remove('red__line');
      errorPass.textContent = '';
   }
}

function change(event) {
   event.preventDefault();
   checkValidityName();
   checkValidityEmail();
   checkValidityPassword();

   let isFormValid =
      inputName.classList.contains('green__line') &&
      inputMail.classList.contains('green__line') &&
      inputPassword.classList.contains('green__line') &&
      inputPasswordConfirm.classList.contains('green__line');

   if (isFormValid) {
      inputName.addEventListener('input', () => {
         inputName.classList.remove('red__line');
         document.querySelector('.error-name').textContent = '';
      });

      inputMail.addEventListener('input', () => {
         inputMail.classList.remove('red__line');
         document.querySelector('.error-mail').textContent = '';
      });

      inputPassword.addEventListener('input', () => {
         inputPassword.classList.remove('red__line');
         document.querySelector('.error-password').textContent = '';
      });

      inputPasswordConfirm.addEventListener('input', () => {
         inputPasswordConfirm.classList.remove('red__line');
         document.querySelector('.error-password').textContent = '';
      });
      form.reset();
      // Действия после успешной отправки формы, например, отправка данных.
      console.log('Форма успешно отправлена');

   }
}










