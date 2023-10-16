const btncopiar= document.querySelector('.copiar');
const textAreaChave=document.querySelector('.chavepix');

btncopiar.addEventListener('click', (e) => {
    navigator.clipboard.writeText(textAreaChave.value);
    alert("Chave Pix copiada com sucesso! Acesse seu aplicativo bancario para efetuar o pagamento.")
})