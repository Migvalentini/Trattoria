const btncopiar= document.querySelector('.copiar');

btncopiar.addEventListener('click', (e) => {
    navigator.clipboard.writeText(pixkey);
    alert("Chave Pix copiada com sucesso! Acesse seu aplicativo bancario para efetuar o pagamento.")
})
let valorzin=220
document.getElementById("precofinal").textContent = valorzin;

pixkey="00020126330014br.gov.bcb.pix0111057200450825204000053039865802BR5923Diego Silveira Da Silva6009Sao Paulo62070503***6304E1E5"