//criar tabelas no bd
function CreateTables() {
   const apiUrl = 'https://trattoria-three.vercel.app/create';

   fetch(apiUrl).then(data => data.json()).then(response => console.log(response.json));
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