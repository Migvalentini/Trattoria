const addAdultTicket = document.querySelector('.addAdultTicketBtn')
const addKidTicket = document.querySelector('.addKidTicketBtn')

// Obtém os botões de "Adicionar Ingresso"
const addTicketButtons = document.querySelectorAll(".addTicketBtn");

// Obtém a div onde os ingressos serão inseridos
const ticketsContainer = document.querySelector(".tickets");

// Adiciona um ouvinte de evento de clique a cada botão de "Adicionar Ingresso"
addTicketButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Crie um novo elemento de ingresso
        const newTicket = document.createElement("div");
        newTicket.classList.add("ticket");

        // Defina o conteúdo do ingresso com base no botão clicado
        if (index === 0) {
         console.log('botão adulto')
            newTicket.innerHTML = `
            <div class="ticket ticket-adult ticket0">
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
        </div>   
            `;
        } else if (index === 1) {
            newTicket.innerHTML = `
                <!-- Conteúdo do ingresso de Criança -->
            `;
        }

        // Adicione o ingresso à div "tickets"
        ticketsContainer.appendChild(newTicket);
    });
});