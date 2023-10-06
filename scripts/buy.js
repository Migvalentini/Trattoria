const nameInput = document.getElementById("iname");
const phoneInput = document.getElementById("iphone");
const cpfInput = document.getElementById("icpf");
const emailInput = document.getElementById("iemail");

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const phoneRegex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/

const errorName = document.querySelector('.error-name')
const errorPhone = document.querySelector('.error-phone')
const errorCpf = document.querySelector('.error-cpf')
const errorEmail = document.querySelector('.error-email')

nameInput.value = 'Miguel Valentini'
phoneInput.value = 54987654321
cpfInput.value = 11122233344
emailInput.value = 'miguel@gmail.com'

function validarFormulario() {
   if (nameRegex.test(nameInput.value)) {
      nameInput.id = 'success-completing'
      errorName.style.opacity = 0
   }

   if (phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'success-completing'
      errorPhone.style.opacity = 0
   }

   if (cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'success-completing'
      errorCpf.style.opacity = 0
   }

   if (emailRegex.test(emailInput.value)) {
      emailInput.id = 'success-completing'
      errorEmail.style.opacity = 0
   }

   if (!nameRegex.test(nameInput.value)) {
      nameInput.id = 'unsuccess-completing'
      errorName.style.opacity = 1
      return false
   }

   if (!phoneRegex.test(phoneInput.value)) {
      phoneInput.id = 'unsuccess-completing'
      errorPhone.style.opacity = 1
      return false
   }

   if (!cpfRegex.test(cpfInput.value)) {
      cpfInput.id = 'unsuccess-completing'
      errorCpf.style.opacity = 1
      return false
   }

   if (!emailRegex.test(emailInput.value)) {
      emailInput.id = 'unsuccess-completing'
      errorEmail.style.opacity = 1
      return false
   }
   return true
}

const submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener("click", function (event) {
   if (!validarFormulario()) {
      event.preventDefault()
   }
})