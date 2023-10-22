function CreateTables() {
   const apiUrl = 'https://trattoria-ochre.vercel.app/create';

   fetch(apiUrl);
};

async function SelectTables(command) {
   const apiUrl = 'https://trattoria-ochre.vercel.app/get';

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

   var tableString =  table.map(function(row) {
      return row.join(',');
   }).join(';');

   localStorage.setItem('table', tableString);
};

 async function InsertSQL(command) {
   const apiUrl = 'https://trattoria-ochre.vercel.app/post';

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

   await fetch(apiUrl, options).then(response => response.json())
   .then(data => console.log(data));
};