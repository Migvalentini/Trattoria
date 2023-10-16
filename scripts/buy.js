const nameInput = document.getElementById("iname");
const phoneInput = document.getElementById("iphone");
const cpfInput = document.getElementById("icpf");
const emailInput = document.getElementById("iemail");

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const phoneRegex = /^\(?\d{2}\)?\s\d{5}\-\d{4}$/;
const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2})$/;
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

const errorName = document.querySelector('.error-name');
const errorPhone = document.querySelector('.error-phone');
const errorCpf = document.querySelector('.error-cpf');
const errorEmail = document.querySelector('.error-email');

phoneInput.addEventListener('input', function () {
   const unformattedValue = this.value.replace(/[^\d]/g, '');
   const formattedValue = unformattedValue.replace(/^(\d{0,2}|\d{2})?(\d{0,5}|\d{5})?(\d{0,4}|\d{4})?$/, '($1) $2-$3');
   this.value = formattedValue;
});

cpfInput.addEventListener('input', function () {
   const unformattedValue = this.value.replace(/[^\d]/g, '');
   const formattedValue = unformattedValue.replace(/^(\d{0,3}|\d{3})?(\d{0,3}|\d{3})?(\d{0,3}|\d{3})?(\d{0,2}|\d{2})?$/, '$1.$2.$3-$4');
   this.value = formattedValue;
});

function validarFormulario() {
   if (nameRegex.test(nameInput.value)) {
      nameInput.id = 'success-completing';
      errorName.style.opacity = 0;
   }

   if (phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'success-completing';
      errorPhone.style.opacity = 0;
   }

   if (cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'success-completing';
      errorCpf.style.opacity = 0;
   }

   if (emailRegex.test(emailInput.value)) {
      emailInput.id = 'success-completing';
      errorEmail.style.opacity = 0;
   }

   if (!nameRegex.test(nameInput.value)) {
      nameInput.id = 'unsuccess-completing';
      errorName.style.opacity = 1;
      return false;
   }

   if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'unsuccess-completing';
      errorPhone.style.opacity = 1;
      return false;
   }

   if (!cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'unsuccess-completing';
      errorCpf.style.opacity = 1;
      return false;
   }

   if (!emailRegex.test(emailInput.value)) {
      emailInput.id = 'unsuccess-completing';
      errorEmail.style.opacity = 1;
      return false;
   }
   return true;
}

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", function (event) {
   if (!validarFormulario()) {
      event.preventDefault();
   }
   else {
      const newBuyer = {
         name: nameInput.value,
         phone: phoneInput.value.replace(/[^0-9]/g, ''),
         cpf: cpfInput.value.replace(/[^0-9]/g, ''),
         email: emailInput.value
      }

      console.log(newBuyer)
      alert(`Informações do comprador que depois irão pro banco:
      Nome: ${newBuyer.name}
      Telefone: ${newBuyer.phone}
      CPF: ${newBuyer.cpf}
      E-mail: ${newBuyer.email}`)
   }
});
