async function InsertSQL(command) {
   const apiUrl = 'https://trattoria-three.vercel.app/insert';

   const formData = {
      sql: command
   };

   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
   body: JSON.stringify(formData)
   };

   await fetch(apiUrl, options).then(data => data.json()).then(response => console.log(response.json));
};

async function SelectTables(command) {
   const apiUrl = 'https://trattoria-three.vercel.app/get';

   const formData = {
      sql: command
   };

   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
   body: JSON.stringify(formData)
   }
   let table
   table = await fetch(apiUrl, options);
   table = await table.json();
   table = table.json;

   if (table != null) {
      var tableString =  table.map(function(row) {
         return row.join(',');
   }).join(';');

   localStorage.setItem('table', tableString);
   }
};

function getting() {
   var matrizItens = [];
   var table = localStorage.getItem('table');
   if (table != null) {
      var linhas = table.split(';');
      
      for (var i = 0; i < linhas.length; i++) {
         var itens = linhas[i].split(',');
         matrizItens.push(itens);
      };
   }
   return matrizItens;
};

function getTable() {
   getting();
   return getting();
};

const nameInput = document.getElementById("iname");
const phoneInput = document.getElementById("iphone");
const cpfInput = document.getElementById("icpf");
const emailInput = document.getElementById("iemail");

const value = 0

nameInput.value = 'Miguel Valentini'
phoneInput.value = '(54) 98765-4321'
cpfInput.value = '999.999.999-99'
emailInput.value = 'miguel@gmail.com'

const nameRegex = /^(([A-Za-zÀ-ÖØ-öø-ÿ]+[\-\']?)*([A-Za-zÀ-ÖØ-öø-ÿ]+)?\s)+([A-Za-zÀ-ÖØ-öø-ÿ]+[\-\']?)*([A-Za-zÀ-ÖØ-öø-ÿ]+)?$/i
const phoneRegex = /^\(?\d{2}\)?\s\d{5}\-\d{4}$/;
const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2})$/;
const emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

const errorName = document.querySelector('.error-name');
const errorPhone = document.querySelector('.error-phone');
const errorCpf = document.querySelector('.error-cpf');
const errorEmail = document.querySelector('.error-email');

const confirmBtn = document.querySelector('.confirmBtn')
const backAndEditBtn = document.querySelector('.backAndEditBtn')

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

function confirmSubmit(name, phone, cpf, email) {
   const confirmDiv = document.querySelector('.confirm')
   const nameDiv = document.querySelector('.name')
   const phoneDiv = document.querySelector('.phone')
   const cpfDiv = document.querySelector('.cpf')
   const emailDiv = document.querySelector('.email')
   nameDiv.textContent = name
   phoneDiv.textContent = phone
   cpfDiv.textContent = cpf
   emailDiv.textContent = email
   confirmDiv.style.display = 'block'
}

backAndEditBtn.addEventListener('click', () => {
   const confirmDiv = document.querySelector('.confirm')
   confirmDiv.style.display = 'none'
})

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
      confirmSubmit(nameInput.value, phoneInput.value, cpfInput.value, emailInput.value)
   }
});

function handleConfirmClick() {
   const newBuyer = {
      name: nameInput.value,
      phone: phoneInput.value.replace(/[^0-9]/g, ''),
      cpf: cpfInput.value.replace(/[^0-9]/g, ''),
      email: emailInput.value,
      payment: 'not-paid',
      value: 0
   }
   const id = InsertSQL("INSERT INTO Compradores (nome, telefone, cpf, email, pago, compra) VALUES ('" + newBuyer.name.toString() + "', '" + newBuyer.phone.toString() + "', '" + newBuyer.cpf.toString() + "', '" + newBuyer.email.toString() + "', 'nao-pago', '" + newBuyer.value.toString() + "') returning id");
   id.then((valor) => {
      localStorage.setItem('id', JSON.stringify(valor));
   })
   console.log(id)
   setTimeout(() => {
      console.log('Inserindo dados no banco')
      window.location.href = './tickets.html'
   }, 3000);
}

confirmBtn.addEventListener('click', () => {
   const confirmDiv = document.querySelector('.confirm')
   confirmDiv.style.display = 'none'
   handleConfirmClick()
})