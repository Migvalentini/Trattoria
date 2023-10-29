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

   let table = await fetch(apiUrl, options);
   table = await table.json();
   table = table.json;

   if (table != null) {
       var tableString =  table.map(function(row) {
           return row.join(',');
   }).join(';');

   localStorage.setItem('table', tableString);
   }
};

async function InsertSQLBuy(command) {
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

   await fetch(apiUrl, options).then(data => data.json()).then(response => localStorage.setItem('id', response.json));
};

async function InsertSQLTicket(command) {
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

   await fetch(apiUrl, options);
};

async function UpdateSQL(command) {
   const apiUrl = 'https://trattoria-three.vercel.app/post';

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

   await fetch(apiUrl, options);
};

function getting() {
   var matrizItens = [];
   var table = localStorage.getItem('table');
   var linhas = table.split(';');
   for (var i = 0; i < linhas.length; i++) {
      var itens = linhas[i].split(',');
      matrizItens.push(itens);
   };
   return matrizItens;
};

function getTable() {
   getting();
   return getting();
};

const ticket = {
   name: "teste",
   cpf: "12345678910",
   restriction: "teste",
   whoKnows: "teste",
   type: "teste",
   idComprador: 340
}
const newBuyer = {
   name: 'Nome Teste',
   phone: '54123456789',
   cpf: '12345678912',
   email: 'teste@teste.com',
   payment: 'not-paid',
   value: 0
}

//InsertSQLBuy("INSERT INTO Compradores (nome, telefone, cpf, email, pago, compra) VALUES ('" + newBuyer.name.toString() + "', '" + newBuyer.phone.toString() + "', '" + newBuyer.cpf.toString() + "', '" + newBuyer.email.toString() + "', 'nao-pago', '" + newBuyer.value.toString() + "') returning id;");

//InsertSQLTicket("INSERT INTO Ingressos (nome, cpf, restricao, conhecido, tipo, id_Comprador) VALUES ('" + ticket.name.toString() + "', '" + ticket.cpf.toString() + "', '" + ticket.restriction.toString() + "', '" + ticket.whoKnows.toString() + "', '" + ticket.type.toString() + "', '" + ticket.idComprador + "') returning id")