const addAdultTicket = document.querySelector('.addAdultTicketBtn')
const addKidTicket = document.querySelector('.addKidTicketBtn')

const addTicketButtons = document.querySelectorAll(".addTicketBtn")

const ticketsContainer = document.querySelector(".tickets")
const ticketsContainerResult = document.querySelector(".tickets-list")

const totalValueText = document.querySelector('.total-result')

const payBtn = document.querySelector('.pay')

let totalValue = 0
const adultPrice = 150
const kidPrice = 50
let ticketIndex = 0

const totalNameText = document.querySelector('.total-name')

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

addTicketButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const newTicket = document.createElement("div")
        newTicket.classList.add("ticket")
        newTicket.classList.add(`ticket${ticketIndex}`)
        newTicket.setAttribute("data-index", ticketIndex)
        
        const newTicketResult = document.createElement("div")
        newTicketResult.classList.add("result-preview")
        newTicketResult.classList.add(`result-preview${ticketIndex}`)
        newTicketResult.setAttribute("data-index", ticketIndex)

        if (index === 0) {
            totalValue += adultPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-adult")
            newTicket.innerHTML = `
            <div class="ticket-texts ticket-texts${ticketIndex}">
                <h3 class="ticket-type">Ingresso Adulto</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname iname${ticketIndex}" type="text" name="iname" id="" required><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf icpf${ticketIndex}" type="number" name="icpf" id="" required><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id="" required><br>
                </div>
                <div class="ticket-content ticket-student-teacher">
                    <label class="itype-label itype-label${ticketIndex}" for="itype">Aluno/Professor</label>
                    <select class="itype itype${ticketIndex}" id="" data-ticket-index="${ticketIndex}">
                        <option value="student">Aluno</option>
                        <option value="teacher">Professor</option>
                    </select>
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <label for="know">Conhece alguém do Cetec?</label>
                    <div class="to-know">
                        <label class="radio-label" for="radio1"><input class="itype-input itype-input${ticketIndex}" type="radio" id="radio1" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes"> Sim</label>
                        <label class="radio-label" for="radio2"><input class="itype-input itype-input${ticketIndex}" type="radio" id="radio2" name="know-somebody" data-ticket-index="${ticketIndex}" value="no"> Não</label>
                    </div>
                </div>
            </div>
               
            `;
            newTicketResult.innerHTML = `
                <div class="result-texts">
                    <span class="result-type">Ingresso Adulto:</span><br>
                    <span class="result-name">Nome: X</span><br>
                    <span class="result-cpf">CPF: X</span><br>
                    <span class="result-restriction">Restrição: X</span>
                </div>
                <div class="result-value">
                    <span>R$${adultPrice},00</span>
                </div>
            `;
        } else if (index === 1) {
            totalValue += kidPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-kid")
            newTicket.innerHTML = `
            <div class="ticket-texts ticket-texts${ticketIndex}">
                <h3 class="ticket-type">Ingresso Criança</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname iname${ticketIndex}" type="text" name="iname" id="" required><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf icpf${ticketIndex}" type="number" name="icpf" id="" required><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id="" required><br>
                </div>
                <div class="ticket-content ticket-student-teacher">
                    <label class="itype-label itype-label${ticketIndex}" for="itype">Aluno/Professor</label>
                    <select class="itype itype${ticketIndex}" id="" data-ticket-index="${ticketIndex}">
                        <option value="student">Aluno</option>
                        <option value="teacher">Professor</option>
                    </select>
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <label for="know">Conhece alguém do Cetec?</label>
                    <div class="to-know">
                        <label class="radio-label" for="radio1"><input class="itype-input itype-input${ticketIndex}" type="radio" id="radio1" name="know-somebody" data-ticket-index="${ticketIndex}" value="yes"> Sim</label>
                        <label class="radio-label" for="radio2"><input class="itype-input itype-input${ticketIndex}" type="radio" id="radio2" name="know-somebody" data-ticket-index="${ticketIndex}" value="no"> Não</label>
                    </div>
                </div>
            </div>
            `;

            newTicketResult.innerHTML = `
                <div class="result-texts">
                    <span class="result-type">Ingresso Criança:</span><br>
                    <span class="result-name">Nome: X</span><br>
                    <span class="result-cpf">CPF: X</span><br>
                    <span class="result-restriction">Restrição: X</span>
                </div>
                <div class="result-value">
                    <span>R$${kidPrice},00</span>
                </div>
            `;
        }

        ticketsContainer.appendChild(newTicket)
        ticketsContainerResult.appendChild(newTicketResult)
        ticketIndex += 1
    });
});

ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const button = event.target;
        const ticket = button.closest(".ticket")

        if (ticket) {
            const ticketType = ticket.classList.contains("ticket-adult") ? "adult" : "kid"
            const ticketIndex = ticket.getAttribute("data-index")

            if (ticketType === "adult") {
                totalValue -= adultPrice
            } else if (ticketType === "kid") {
                totalValue -= kidPrice
            }

            totalValueText.innerHTML = `R$${totalValue}`

            ticket.remove()

            const ticketResult = ticketsContainerResult.querySelector(`[data-index="${ticketIndex}"]`)

            if (ticketResult) {
                ticketResult.remove()
            }
        }
    }
})

ticketsContainer.addEventListener("change", (event) => {
    const target = event.target

    if (target.classList.contains("itype-input")) {
        const ticketIndex = target.getAttribute("data-ticket-index")
        const selectElement = document.querySelector(`.itype${ticketIndex}`)
        const labelElement = document.querySelector(`.itype-label${ticketIndex}`)

        if (selectElement && labelElement) {
            if (target.value === "yes") {
                selectElement.style.display = "block"
                labelElement.style.display = "block"
            } else if (target.value === "no") {
                selectElement.style.display = "none"
                labelElement.style.display = "none"
            }
        }
    }
})

payBtn.addEventListener('click', () => {
    const ticketElements = document.querySelectorAll('.ticket');

    if (ticketElements.length === 0) {
        alert('Por favor, adicione pelo menos um ingresso antes de pagar.');
        return;
    }

    let allTicketsValid = true;

    ticketElements.forEach((ticketElement, index) => {
        const nameInput = document.querySelector(`.iname${index}`);
        const cpfInput = document.querySelector(`.icpf${index}`);

        const isNameValid = nameRegex.test(nameInput.value);
        const isCPFValid = cpfRegex.test(cpfInput.value);

        // Remove todas as classes de estilo anteriores
        nameInput.classList.remove('valid-input', 'invalid-input');
        cpfInput.classList.remove('valid-input', 'invalid-input');

        if (!isNameValid || !isCPFValid) {
            allTicketsValid = false;

            // Adiciona a classe "invalid-input" para destacar que o campo é inválido
            if (!isNameValid) {
                nameInput.classList.add('invalid-input');
            }
            if (!isCPFValid) {
                cpfInput.classList.add('invalid-input');
            }
        } else {
            // Adiciona a classe "valid-input" para destacar que o campo é válido
            nameInput.classList.add('valid-input');
            cpfInput.classList.add('valid-input');
        }
    });

    if (!allTicketsValid) {
        alert('Por favor, preencha corretamente todos os campos em vermelho.');
    } else {
        alert('Pagamento bem-sucedido!');
    }
});
