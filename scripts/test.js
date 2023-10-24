//criar tabelas no bd
function CreateTables() {
   const apiUrl = 'https://trattoria-eight.vercel.app/create';

   fetch(apiUrl).then(data => data.json()).then(response => console.log(response.json));
};

//pegar as informações no bd
async function SelectTables(command) {
   const apiUrl = 'https://trattoria-eight.vercel.app/get';

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

// insere as informações no bd
async function InsertSQL(command) {
   const apiUrl = 'https://trattoria-eight.vercel.app/post';

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

// puxa as informações do select
function getTable() {
   getting();
   return getting();
};