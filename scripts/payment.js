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

const totalValue = localStorage.getItem('value')

const btncopiar= document.querySelector('.copiar');

btncopiar.addEventListener('click', (e) => {
   navigator.clipboard.writeText(pixkey);
   alert("Chave Pix copiada com sucesso! Por favor, acesse seu aplicativo bancário para efetuar o pagamento")
})

document.getElementById("precofinal").textContent = 'Valor a ser pago: R$' + totalValue;

pixkey="00020126470014br.gov.bcb.pix0125laisarrudakoche@gmail.com5204000053039865802BR5917LAIS ARRUDA KOCHE6009Sao Paulo62070503***6304765C"

function abrir(){
   document.getElementById('popup').style.display='block';
}