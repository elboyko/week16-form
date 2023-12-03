const form = document.getElementById('form');
form.addEventListener('submit', change);

function change(event) {
   event.preventDefault();
   checkValidityName();
   checkValidityEmail();
   checkValidityPassword();
   form.reset();
}

const input = document.querySelector('.form__name');
const inputMail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__pass')

//функция проверки поля имени
function checkValidityName() {
   let validity = input.validity;
   let reg = /^[a-zA-ZА-Яа-я]+$/;
   let input1 = document.querySelector('.form__name')
   let errorDiv = document.querySelector('.error-name');
   let errorDiv2 = document.querySelector('.error-name2');
   // if (validity.patternMismatch) {
   //    input.classList.add('red__line');
   //    errorDiv.textContent = 'Неверный формат';
   // }
   let res = reg.test(input1.value)
   if (!res === true) {
      input1.classList.add('red__line');
      errorDiv.textContent = 'Неверный формат';
   }


   if (validity.valueMissing) {

      input.classList.add('red__line');
      errorDiv2.textContent = 'Необходимо заполнить поле';
   }
   else {
      input.classList.remove('red__line');
      errorDiv.textContent = '';
      errorDiv2.textContent = '';
   }
}
//функция проверки поля Email
function checkValidityEmail() {
   let validityMail = inputMail.validity;
   let errorSpan = document.querySelector('.error-mail');
   if (validityMail.valueMissing) {

      inputMail.classList.add('red__line');
      errorSpan.textContent = 'Необходимо заполнить поле';
   }
   else {
      inputMail.classList.remove('red__line');
      errorSpan.textContent = '';
   }
}

//функция проверки поля  пароль
function checkValidityPassword() {
   let validityPass = inputPassword.validity;
   let errorPass = document.querySelector('.error-password');
   if (validityPass.valueMissing) {

      inputPassword.classList.add('red__line');
      errorPass.textContent = 'Необходимо заполнить поле';
   }
   else {
      inputPassword.classList.remove('red__line');
      errorPass.textContent = '';
   }
}















// function checkAll() {
//    let input = document.querySelector(".form__name");

//    for (let input of inputs) {
//       checkValidity(input);
//    }

//    let errorDiv = document.querySelector('.error-message');
//    errorDiv.innerHTML = errors.join('. \n');
// }

