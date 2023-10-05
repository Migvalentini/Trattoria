const addAdultTicket = document.querySelector('.addAdultTicketBtn')
const addKidTicket = document.querySelector('.addKidTicketBtn')

const addTicketButtons = document.querySelectorAll(".addTicketBtn");

const ticketsContainer = document.querySelector(".tickets");
const ticketsContainerResult = document.querySelector(".tickets-list");

const totalValueText = document.querySelector('.total-result')

let totalValue = 0
let ticketIndex = 0

addTicketButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const newTicket = document.createElement("div");
        newTicket.classList.add("ticket");
        newTicket.classList.add(`ticket${ticketIndex}`);
        ticketIndex += 1

        console.log(totalValue)

        const newTicketResult = document.createElement("div");
        newTicketResult.classList.add("result-preview");

        if (index === 0) {
            totalValue += 150
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-adult");
            newTicket.innerHTML = `
            <div class="ticket-texts">
                <h3 class="ticket-type">Ingresso de Adulto</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname" type="text" name="iname" id="" required><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf" type="number" name="icpf" id="" required><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth" type="date" name="ibirth" id="" required><br>
                </div>
                <div class="ticket-content ticket-student-teacher">
                    <label for="itype">Aluno/Professor</label>
                    <select class="itype" id="" name="frutas">
                        <option value="student">Aluno</option>
                        <option value="teacher">Professor</option>
                    </select>
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <label for="know">Conhece alguém do Cetec?</label>
                    <div class="to-know">
                        <label class="radio-label" for="radio1"><input type="radio" id="radio1" name="know-somebody" value="yes"> Sim</label>
                        <label class="radio-label" for="radio2"><input type="radio" id="radio2" name="know-somebody" value="no"> Não</label>
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
                    <span>R$150,00</span>
                </div>
            `;
        } else if (index === 1) {
            totalValue += 50
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-kid");
            newTicket.innerHTML = `
            <div class="ticket-texts">
                <h3 class="ticket-type">Ingresso de Criança</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname" type="text" name="iname" id="" required><br>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf" type="number" name="icpf" id="" required><br>
                </div>
                <div class="ticket-content ticket-birth">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth" type="date" name="ibirth" id="" required><br>
                </div>
                <div class="ticket-content ticket-student-teacher">
                    <label for="itype">Aluno/Professor</label>
                    <select class="itype" id="" name="frutas">
                        <option value="student">Aluno</option>
                        <option value="teacher">Professor</option>
                    </select>
                </div>
            </div>
            <div class="rest-know">
                <button class="delete-btn">Excluir</button>
                <div class="restriction-div">
                    <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                    <textarea name="irestriction" id="irestriction" cols="10" rows="3" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="know-div">
                    <label for="know">Conhece alguém do Cetec?</label>
                    <div class="to-know">
                        <label class="radio-label" for="radio1"><input type="radio" id="radio1" name="know-somebody" value="yes"> Sim</label>
                        <label class="radio-label" for="radio2"><input type="radio" id="radio2" name="know-somebody" value="no"> Não</label>
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
                    <span>R$50,00</span>
                </div>
            `;
        }

        // Adicione o ingresso à div "tickets"
        ticketsContainer.appendChild(newTicket);
        ticketsContainerResult.appendChild(newTicketResult)
    });
});