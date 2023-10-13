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

addTicketButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const newTicket = document.createElement("div")
        newTicket.classList.add("ticket")
        newTicket.classList.add(`ticket${ticketIndex}`)
        newTicket.setAttribute("data-index", ticketIndex)
        
        const newTicketResult = document.createElement("div")
        newTicketResult.classList.add("result-preview")
        newTicketResult.classList.add(`result-preview${ticketIndex}`)
        newTicketResult.setAttribute("data-index", ticketIndex)

        newTicket.innerHTML = `
        <div class="ticket-texts ticket-texts${ticketIndex}">
            <h3 class="ticket-type${ticketIndex}">Ingresso Adulto</h3>
            <div class="ticket-content ticket-name">
                <label for="iname">Nome:</label>
                <input class="iname iname${ticketIndex}" type="text" name="iname" id="" placeholder="Nome e Sobrenome"><br>
            </div>
            <div class="ticket-content ticket-cpf">
                <label for="icpf">CPF:</label>
                <input class="icpf icpf${ticketIndex}" type="number" name="icpf" id="" placeholder="XXX.XXX.XXX.XX"><br>
            </div>
            <div class="ticket-content ticket-birth">
                <label for="ibirth">Data de <br> Nascimento:</label>
                <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id=""><br>
            </div>
            <div class="ticket-content ticket-students ticket-students${ticketIndex}">
                <label for="ilist-student">Alunos:</label>
                <select class="list-students list-students${ticketIndex}">
                    <option value="">Selecione um nome</option>
                    <optgroup label="GASTRONOMIA">
                        <option value="Gastro - Ana Paula Einsfeld">Ana Paula Einsfeld</option>
                        <option value="Gastro - Bruna Bortolatto">Bruna Bortolatto</option>
                        <option value="Gastro - Fernando Fagherazzi Pizzoli">Fernando Fagherazzi Pizzoli</option>
                        <option value="Gastro - Gabrielli Selistre">Gabrielli Selistre</option>
                        <option value="Gastro - Isabeli Slongo Padilha">Isabeli Slongo Padilha</option>
                        <option value="Gastro - Isadora Berton Corso">Isadora Berton Corso</option>
                        <option value="Gastro - Júlia Cristina Galvăo Ribas">Júlia Cristina Galvăo Ribas</option>
                        <option value="Gastro - Marcella Finger Viezzer">Marcella Finger Viezzer</option>
                        <option value="Gastro - Maria Eduarda Gaiardo">Maria Eduarda Gaiardo</option>
                        <option value="Gastro - Pedro Schio Ferrigo">Pedro Schio Ferrigo</option>
                        <option value="Gastro - Rafael Garcia Dias">Rafael Garcia Dias</option>
                        <option value="Gastro - Valentina Viecelli Dornelles">Valentina Viecelli Dornelles</option>
                        <option value="Gastro - Vitória Luiza Cabral de Jesus">Vitória Luiza Cabral de Jesus</option>
                    </optgroup>
                    <optgroup label="ADMINISTRAÇÃO">
                        <option value="ADM - Aleander Schuster de Almeida">Aleander Schuster de Almeida</option>
                        <option value="ADM - Ana Vitória Rodrigues">Ana Vitória Rodrigues</option>
                        <option value="ADM - Augusto Danieleski Tomanchievicz">Augusto Danieleski Tomanchievicz</option>
                        <option value="ADM - Bernardo Camargo Forini">Bernardo Camargo Forini</option>
                        <option value="ADM - Cinara Camargo da Silva">Cinara Camargo da Silva</option>
                        <option value="ADM - Eduarda Leite da Rosa">Eduarda Leite da Rosa</option>
                        <option value="ADM - Fernanda Marca">Fernanda Marca</option>
                        <option value="ADM - Giovanna Caldas Lopes">Giovanna Caldas Lopes</option>
                        <option value="ADM - Isadora Manini Costa">Isadora Manini Costa</option>
                        <option value="ADM - Laís Arruda Köche">Laís Arruda Köche</option>
                        <option value="ADM - Laura Borges Cardoso">Laura Borges Cardoso</option>
                        <option value="ADM - Letícia Machado Gil">Letícia Machado Gil</option>
                        <option value="ADM - Luísa dos Santos da Silva">Luísa dos Santos da Silva</option>
                        <option value="ADM - Manuella Pessoa Cavalcante da Costa">Manuella Pessoa Cavalcante da Costa</option>
                        <option value="ADM - Maria Eduarda Dannenhauer Uhl">Maria Eduarda Dannenhauer Uhl</option>
                        <option value="ADM - Maria Eduarda de Oliveira Biasuz">Maria Eduarda de Oliveira Biasuz</option>
                        <option value="ADM - Marina Cavion Lopes">Marina Cavion Lopes</option>
                        <option value="ADM - Paola Gregoletto Duso">Paola Gregoletto Duso</option>
                        <option value="ADM - Pedro Augusto Pasa Sartori">Pedro Augusto Pasa Sartori</option>
                        <option value="ADM - Sarah Luiza Azevedo da Silva">Sarah Luiza Azevedo da Silva</option>
                        <option value="ADM - Vicente Azevedo de Oliveira">Vicente Azevedo de Oliveira</option>
                    </optgroup>
                    <optgroup label="INFORMÁTICA">
                        <option value="Inf - Alana Pereira Pegoraro">Alana Pereira Pegoraro</option>
                        <option value="Inf - Ana Carolina Couto Leal">Ana Carolina Couto Leal</option>
                        <option value="Inf - Arthur da Fonseca Macedo">Arthur da Fonseca Macedo</option>
                        <option value="Inf - Arthur Forni">Arthur Forni</option>
                        <option value="Inf - Augusto Branchi Graebin">Augusto Branchi Graebin</option>
                        <option value="Inf - Augusto Henrique Cerutti">Augusto Henrique Cerutti</option>
                        <option value="Inf - Augusto Moroni dos Santos">Augusto Moroni dos Santos</option>
                        <option value="Inf - Bernardo Azevedo Vieira">Bernardo Azevedo Vieira</option>
                        <option value="Inf - Bianca Elisa Rossa">Bianca Elisa Rossa</option>
                        <option value="Inf - Camila Brollo Macêdo">Camila Brollo Macêdo</option>
                        <option value="Inf - Cláudia Oliveira da Cruz">Cláudia Oliveira da Cruz</option>
                        <option value="Inf - Cristian Rafael Metz">Cristian Rafael Metz</option>
                        <option value="Inf - Daniel Damin Zamboni">Daniel Damin Zamboni</option>
                        <option value="Inf - Diego Silveira da Silva">Diego Silveira da Silva</option>
                        <option value="Inf - Enzo Matana da Silva">Enzo Matana da Silva</option>
                        <option value="Inf - Gabriel Bado da Silva">Gabriel Bado da Silva</option>
                        <option value="Inf - Gabriel Frizzo Ciervo">Gabriel Frizzo Ciervo</option>
                        <option value="Inf - Giovana Melos Borsoi">Giovana Melos Borsoi</option>
                        <option value="Inf - Guilherme Augusto Velho de Oliveira">Guilherme Augusto Velho de Oliveira</option>
                        <option value="Inf - Guilherme Scomazzon Tamagno">Guilherme Scomazzon Tamagno</option>
                        <option value="Inf - Gustavo Carneiro dos Santos">Gustavo Carneiro dos Santos</option>
                        <option value="Inf - Henrique Brum Riva">Henrique Brum Riva</option>
                        <option value="Inf - Janaína Giacomin">Janaína Giacomin</option>
                        <option value="Inf - Jean Vítor Dalla Vecchia Boniatti">Jean Vítor Dalla Vecchia Boniatti</option>
                        <option value="Inf - Jhonatan de Lima de Almeida">Jhonatan de Lima de Almeida</option>
                        <option value="Inf - João Henrique Camara Piccin">João Henrique Camara Piccin</option>
                        <option value="Inf - João Pedro de Castro Pereira">João Pedro de Castro Pereira</option>
                        <option value="Inf - João Pedro de Godoi da Silva">João Pedro de Godoi da Silva</option>
                        <option value="Inf - João Victor Silveira Ferraz">João Victor Silveira Ferraz</option>
                        <option value="Inf - Júlia Giordano Bianchi">Júlia Giordano Bianchi</option>
                        <option value="Inf - Júlia Salvador Righez">Júlia Salvador Righez</option>
                        <option value="Inf - Leonardo Teles Cesar">Leonardo Teles Cesar</option>
                        <option value="Inf - Leonora Sagas Rodrigues Viera">Leonora Sagas Rodrigues Viera</option>
                        <option value="Inf - Luana Reginato Bassanesi">Luana Reginato Bassanesi</option>
                        <option value="Inf - Luís Henrique Bonetto">Luís Henrique Bonetto</option>
                        <option value="Inf - Lucca Marchett Frozza">Lucca Marchett Frozza</option>
                        <option value="Inf - Maria Clara Sirtoli Lazaretti">Maria Clara Sirtoli Lazaretti</option>
                        <option value="Inf - Maria Klein Pinheiro Machado">Maria Klein Pinheiro Machado</option>
                        <option value="Inf - Matheus Cassânego">Matheus Cassânego</option>
                        <option value="Inf - Matheus Concari Metz">Matheus Concari Metz</option>
                        <option value="Inf - Miguel Valentini">Miguel Valentini</option>
                        <option value="Inf - Murilo Lazzari Gasperin">Murilo Lazzari Gasperin</option>
                        <option value="Inf - Nícolas Buzin Gomes">Nícolas Buzin Gomes</option>
                        <option value="Inf - Nícolas Hunhoff Servelin">Nícolas Hunhoff Servelin</option>
                        <option value="Inf - Nicolas Menon Simiano">Nicolas Menon Simiano</option>
                        <option value="Inf - Octavio Henrique Rodrigues Alves">Octavio Henrique Rodrigues Alves</option>
                        <option value="Inf - Pedro Henrique Negrini Perondi">Pedro Henrique Negrini Perondi</option>
                        <option value="Inf - Rayana Sofia Rizzi">Rayana Sofia Rizzi</option>
                        <option value="Inf - Vinícius Menegol Cardoso">Vinícius Menegol Cardoso</option>
                        <option value="Inf - Yago Rech de Jesus">Yago Rech de Jesus</option>            
                    </optgroup>
                </select>
            </div>
            <div class="ticket-content ticket-teacher ticket-teacher${ticketIndex}">
                <label for="iteacher-name">Professores:</label>
                <input class="iteacher-name iteacher-name${ticketIndex}" type="text" name="iteacher-name" id="" placeholder="Nome do professor(a)">
            </div>
            <div class="ticket-content ticket-student-n-tech ticket-student-n-tech${ticketIndex}">
                <label for="istudent-n-tech">Nome:</label>
                <input class="istudent-n-tech istudent-n-tech${ticketIndex}" type="text" name="istudent-n-tech" id="" placeholder="Nome do aluno(a)">
            </div>
        </div>
        <div class="rest-know">
            <button class="delete-btn">Excluir</button>
            <div class="restriction-div">
                <label class="rest-label" for="irestriction">Possui Alguma Restrição Alimentar?</label>
                <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" cols="10" rows="3" maxlength="150" placeholder="Se sim, digite aqui..."></textarea>
            </div>
            <div class="know-div">
                <p>Conhece alguém do Cetec?</p>
                <div class="to-know">
                    <button class="know-btn know-btn${ticketIndex} student-tech-btn${ticketIndex}" data-value="yes-student">Aluno Que<br>Faz Técnico</button>
                    <button class="know-btn know-btn${ticketIndex} student-n-tech-btn${ticketIndex}" data-value="yes-student-n-tech">Aluno Que Não Faz Técnico</button>
                    <button class="know-btn know-btn${ticketIndex} teacher-btn${ticketIndex}" data-value="yes-teacher">Sou Professor</button>
                    <button class="know-btn know-btn${ticketIndex} no-btn${ticketIndex}" data-value="no">Não</button>
            </div>
        </div>
        `;
        newTicketResult.innerHTML = `
            <div class="result-texts">
                <span class="result-type${ticketIndex}">Ingresso Adulto:</span><br>
            </div>
            <div>
                <span class="result-value${ticketIndex}">R$${adultPrice},00</span>
            </div>
        `;
        
        ticketsContainer.appendChild(newTicket)
        ticketsContainerResult.appendChild(newTicketResult)
        if (button.classList.contains("addAdultTicketBtn")) {
            totalValue += adultPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-adult")
        }
        if (button.classList.contains("addKidTicketBtn")) {
            totalValue += kidPrice
            totalValueText.innerHTML = `R$${totalValue}`
            newTicket.classList.add("ticket-kid")
            const ticketType = document.querySelector(`.ticket-type${ticketIndex}`);
            const resultType = document.querySelector(`.result-type${ticketIndex}`);
            const resultValue = document.querySelector(`.result-value${ticketIndex}`);
            ticketType.textContent = 'Ingresso Criança';
            resultType.textContent = 'Ingresso Criança'
            resultValue.textContent = 'R$50,00';
        }
        
        const name = document.querySelector(`.iname${ticketIndex}`);
        name.value = "Miguel Valentini";
        const cpf = document.querySelector(`.icpf${ticketIndex}`);
        cpf.value = "12345678900";
        const data = document.querySelector(`.ibirth${ticketIndex}`)
        data.value = "2000-01-01";

        ticketIndex += 1
    });
});

ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const button = event.target;
        const ticket = button.closest(".ticket");

        if (ticket) {
            const ticketType = ticket.classList.contains("ticket-adult") ? "adult" : "kid";
            const ticketIndexToDelete = parseInt(ticket.getAttribute("data-index"));

            if (ticketType === "adult") {
                totalValue -= adultPrice;
            } else if (ticketType === "kid") {
                totalValue -= kidPrice;
            }

            totalValueText.innerHTML = `R$${totalValue}`;

            const ticketResult = ticketsContainerResult.querySelector(`.result-preview${ticketIndexToDelete}`);
            if (ticketResult) {
                ticketResult.remove();
            }

            ticket.remove();

            const ticketResults = ticketsContainerResult.querySelectorAll(".result-preview");

            ticketResults.forEach((ticketResult, index) => {
                let currentIndex = parseInt(ticketResult.getAttribute("data-index"));

                if (currentIndex > ticketIndexToDelete) {
                    currentIndex -= 1;
                    ticketResult.setAttribute("data-index", currentIndex);
                }
            });
        }
    }
});

ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("know-btn")) {
        const target = event.target;
        const ticketIndex = target.classList[1].split("know-btn")[1];
        const typeValue = target.getAttribute("data-value");
        const studentsDiv = document.querySelector(`.ticket-students${ticketIndex}`);
        const studentsNTechDiv = document.querySelector(`.ticket-student-n-tech${ticketIndex}`);
        const teacherDiv = document.querySelector(`.ticket-teacher${ticketIndex}`);
        const selectAlunos = document.querySelector(`.list-students${ticketIndex}`);
        
        const allButtons = document.querySelectorAll(`.know-btn${ticketIndex}`);
        allButtons.forEach((button) => {
            button.classList.remove("active");
        });
        target.classList.add("active");
        
        if (typeValue === "yes-student") {
            if (studentsDiv) {
                studentsDiv.style.display = "block";
            }
            if (studentsNTechDiv) {
                studentsNTechDiv.style.display = "none";
            }
            if (teacherDiv) {
                teacherDiv.style.display = "none";
            }
            if (selectAlunos) {
                selectAlunos.required = true;
            }
        } else if (typeValue === "yes-student-n-tech") {
            if (studentsDiv) {
                studentsDiv.style.display = "none";
            }
            if (studentsNTechDiv) {
                studentsNTechDiv.style.display = "block";
            }
            if (teacherDiv) {
                teacherDiv.style.display = "none";
            }
            if (selectAlunos) {
                selectAlunos.required = true;
            }
        } else if (typeValue === "yes-teacher") {
            if (studentsDiv) {
                studentsDiv.style.display = "none";
            }
            if (studentsNTechDiv) {
                studentsNTechDiv.style.display = "none";
            }
            if (teacherDiv) {
                teacherDiv.style.display = "block";
            }
            if (selectAlunos) {
                selectAlunos.required = false;
            }
        } else if (typeValue === "no") {
            if (studentsDiv) {
                studentsDiv.style.display = "none";
            }
            if (studentsNTechDiv) {
                studentsNTechDiv.style.display = "none";
            }
            if (teacherDiv) {
                teacherDiv.style.display = "none";
            }
            if (selectAlunos) {
                selectAlunos.required = false;
            }
        }
    }
});


payBtn.addEventListener('click', () => {
    const ticketElements = document.querySelectorAll('.ticket');
    const ticketsValues = [];

    if (ticketElements.length === 0) {
        console.log('Por favor, adicione pelo menos um ingresso antes de pagar.');
        return;
    }

    let allTicketsValid = true;

    ticketElements.forEach((ticketElement, index) => {
        const nameInput = document.querySelector(`.iname${index}`);
        const cpfInput = document.querySelector(`.icpf${index}`);
        const birthInput = document.querySelector(`.ibirth${index}`);
        const selectStudent = document.querySelector(`.list-students${index}`)
        const studentNTechName = document.querySelector(`.istudent-n-tech${index}`);
        const teacherInput = document.querySelector(`.iteacher-name${index}`);
        const restrictionTextarea = document.querySelector(`.irestriction${index}`);
        const studentTechBtn = document.querySelector(`.student-tech-btn${index}`)
        const studentNTechBtn = document.querySelector(`.student-n-tech-btn${index}`)
        const teacherBtn = document.querySelector(`.teacher-btn${index}`)
        const noBtn = document.querySelector(`.no-btn${index}`)

        const isNameValid = nameRegex.test(nameInput.value);
        const isCPFValid = cpfRegex.test(cpfInput.value);
        const isBirthValid = birthInput.value !== '';

        nameInput.removeAttribute('id');
        cpfInput.removeAttribute('id');
        birthInput.removeAttribute('id');
        selectStudent.removeAttribute('id');
        teacherInput.removeAttribute('id');

        restrictionTextarea.setAttribute('id', 'success-completing')

        if (isNameValid) {
            nameInput.setAttribute('id', 'success-completing');
        }
        if (isCPFValid) {
            cpfInput.setAttribute('id', 'success-completing');
        }
        if (isBirthValid) {
            birthInput.setAttribute('id', 'success-completing');
        }
        
        if (!isNameValid || !isCPFValid || !isBirthValid) {
            allTicketsValid = false;

            if (!isNameValid) {
                nameInput.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing');;
            }
            if (!isCPFValid) {
                cpfInput.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing');;
            }
            if (!isBirthValid) {
                birthInput.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing');;
            }
        }

        const ticketType = ticketElement.classList.contains('ticket-adult') ? 'adult' : 'kid'; 

        const birthDate = new Date(birthInput.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        const ticketValues = {
            name: nameInput.value,
            cpf: cpfInput.value,
            birth: birthInput.value,
            type: ticketType,
            restriction: restrictionTextarea.value,
            age: age,
            studentName: '',
            studentNTechName: '',
            teacherName: ''
        };
        
        console.log(selectStudent)
        if (selectStudent === '') {
            allTicketsValid = false;
            selectStudent.setAttribute('id', 'unsuccess-completing');
            ticketElement.setAttribute('id', 'unsuccess-completing');
        } else {
            selectStudent.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            ticketValues.studentName = selectStudent.value;
        }
        
        if (studentNTechName.value === '') {
            allTicketsValid = false;
            studentNTechName.setAttribute('id', 'unsuccess-completing');
            ticketElement.setAttribute('id', 'unsuccess-completing');
        } else {
            studentNTechName.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            ticketValues.studentNTechName = studentNTechName.value;
        }

        if (teacherInput.value === '') {
            allTicketsValid = false;
            teacherInput.setAttribute('id', 'unsuccess-completing');
            ticketElement.setAttribute('id', 'unsuccess-completing');
        } else {
            teacherInput.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            ticketValues.teacherName = teacherInput.value;
        }

        if (ticketType === 'kid') {
            if (age >= 5 && age <= 10) {
                console.log(`Ingresso ${index + 1} é de Criança com idade válida.`);
            } else {
                console.log(`Ingresso ${index + 1} é de Criança com idade inválida.`);
                allTicketsValid = false;
                ticketElement.setAttribute('id', 'unsuccess-completing');
                birthInput.setAttribute('id', 'unsuccess-completing');
            }
        }

        ticketsValues.push(ticketValues);
    });

    if (!allTicketsValid) {
        console.log('Dados inválidos');
    } else {
        console.log('Valores dos ingressos:', ticketsValues);
    }
});
