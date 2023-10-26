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

const btncopiar= document.querySelector('.copiar');

btncopiar.addEventListener('click', (e) => {
    navigator.clipboard.writeText(pixkey);
    alert("Chave Pix copiada com sucesso! Por favor, acesse seu aplicativo bancário para efetuar o pagamento")
})

SelectTables("SELECT compra FROM Compradores WHERE id = 1")
let valorzin=getTable()
document.getElementById("precofinal").textContent = 'Valor a ser pago: R$' + valorzin;

pixkey="a2e156c0-651e-453b-b5ce-c3a8178bd6e7"

function abrir(){
    document.getElementById('popup').style.display='block';
}