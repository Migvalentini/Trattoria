// Seleciona os elementos do formulário
const nameInput = document.getElementById("iname");
const phoneInput = document.getElementById("iphone");
const cpfInput = document.getElementById("icpf");
const emailInput = document.getElementById("iemail");

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
const phoneRegex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

function validarFormulario() {
   if (nameRegex.test(nameInput.value)) {
      nameInput.id = 'success-completing'
   }

   if (phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'success-completing'
   }

   if (cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'success-completing'
   }

   if (emailRegex.test(emailInput.value)) {
      emailInput.id = 'success-completing'
   }

   if (!nameRegex.test(nameInput.value)) {
      nameInput.id = 'unsuccess-completing'
      return false;
   }

   if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'unsuccess-completing'
      return false;
   }

   if (!cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'unsuccess-completing'
      return false;
   }

   if (!emailRegex.test(emailInput.value)) {
      emailInput.id = 'unsuccess-completing'
      return false;
   }

   return true;
}

// Adiciona um ouvinte de evento ao botão de envio do formulário
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", function (event) {
   if (!validarFormulario()) {
      event.preventDefault();
   }
});
