const form = document.getElementById('form');
form.addEventListener('submit', change);
function change(event) {
   event.preventDefault();
   // errors = [];
   checkValidity();
   form.reset();
}

const input = document.querySelector('.form__name');

let errors = [];

function checkValidity() {
   let validity = input.validity;

   if (validity.patternMismatch) {
      errors.push('Неверный формат заполнения');
   }
   if (validity.valueMissing) {
      errors.push('Необходимо заполнить поле');
   }
   let errorDiv = document.querySelector('.error-message');
   errorDiv.innerHTML = errors.join('. \n');
}


// function checkAll() {
//    let input = document.querySelector(".form__name");

//    for (let input of inputs) {
//       checkValidity(input);
//    }

//    let errorDiv = document.querySelector('.error-message');
//    errorDiv.innerHTML = errors.join('. \n');
// }

