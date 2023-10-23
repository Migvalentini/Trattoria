const btncopiar= document.querySelector('.copiar');

btncopiar.addEventListener('click', (e) => {
    navigator.clipboard.writeText(pixkey);
    alert("Chave Pix copiada com sucesso! Acesse seu aplicativo bancario para efetuar o pagamento.")
})
// PEGAR O VALOR TOTAL DOS INGRESSOS NO BD E ATRIBUIR NA VARIÁVEL 'VALOR'
let valorzin=220
document.getElementById("precofinal").textContent = 'Valor a ser pago: R$' +   valorzin;

pixkey="a2e156c0-651e-453b-b5ce-c3a8178bd6e7"

function abrir(){
    document.getElementById('popup').style.display='block';
}