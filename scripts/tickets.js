let ticketsSold
let availableTickets

function updateTicketsText() {
    const availableTicketsText = document.querySelector('.availableTicketsText')
    availableTicketsText.textContent = `${availableTickets}`
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        SelectTables("SELECT COUNT(*) FROM Ingressos")
        ticketsSold = getTable()[0][0]
    
        availableTickets = 100 - ticketsSold
        console.log(ticketsSold, availableTickets)
        updateTicketsText(`${availableTickets}`)
    
        if (ticketsSold >= 100) {
            const maxTicketsDiv = document.querySelector('.max-tickets')
            addTicketButtons.forEach((addTicket) => {
                addTicket.style.display = 'none'
            })
            maxTicketsDiv.style.display='block'
            maxTicketsBtn.addEventListener('click', () => {
                maxTicketsDiv.style.display = 'none'
                payBtn.remove()
            })
            const infoDiv = document.querySelector('.info')
            infoDiv.style.display = 'none'
        }
    }, 1000);
})

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
 
async function InsertSQLTicket(command) {
    const apiUrl = 'https://trattoria-three.vercel.app/insert';
 
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
 
    await fetch(apiUrl, options).then(response => response.json()).then(data => console.log(data))
};

async function UpdateSQL(command) {
    const apiUrl = 'https://trattoria-three.vercel.app/post';
 
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
 
    await fetch(apiUrl, options).then(response => response.json()).then(data => console.log(data))
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

let ticketsSoldByStudent = {};

let limitTickets = {
    "Gastronomia": 2,
    "Informática": 4,
    "Administração": 3
};

const idBuyer = Number(localStorage.getItem('id'))

const totalName = document.querySelector('.total-name')
const buyerName = localStorage.getItem('buyerName')
totalName.textContent = buyerName

const ticketsContainer = document.querySelector(".tickets")
const ticketsContainerResult = document.querySelector(".tickets-list")
const maxTicketsStudentDiv = document.querySelector('.max-tickets-student')

const totalValueText = document.querySelector('.total-result')

const addTicketButtons = document.querySelectorAll(".addTicketBtn")
const payBtn = document.querySelector('.pay')
const confirmSubmitBtn = document.querySelector('.confirmSubmitBtn')
const backAndEditBtn = document.querySelector('.backAndEditBtn')
const startBtn = document.querySelector('.startBtn')
const infoBtn = document.querySelector('.fa-circle-info')
const maxTicketsBtn = document.querySelector('.max-tickets-btn')
const maxTicketsStudentsBtn = document.querySelector('.max-tickets-student-btn')
const errorBtn = document.querySelector('.errorBtn')

let totalValue = 0
const adultPrice = 110
const kidPrice = 55
const maxKidAge = 12
const minKidAge = 4
let ticketIndex = 0

let ticketsIndexes = []

const ticketsValues = [];

const nameRegex = /^(([A-Za-zÀ-ÖØ-öø-ÿ]+[\-\']?)*([A-Za-zÀ-ÖØ-öø-ÿ]+)?\s)+([A-Za-zÀ-ÖØ-öø-ÿ]+[\-\']?)*([A-Za-zÀ-ÖØ-öø-ÿ]+)?$/i
const cpfRegex = /^[0-9]{11}$/;

function showHideError(type, age = 0) {
    const errorCompleting = document.querySelector('.error-completing')
    if (type === 'hide') {
        errorCompleting.style.display = 'none'
    } else if (type === 'show') {
        errorCompleting.style.display = 'block'
    } else if (type === 'show-kid') {
        const errorCompletingKid = document.querySelector('.kid-error')
        errorCompletingKid.textContent = `A idade da criança (${age}) não é compatível com a faixa etária permitida (de ${minKidAge} a ${maxKidAge} anos)`
        errorCompleting.style.display = 'block'
    }
}

function confirmSubmitTicket(ticketsValues) {
    const confirmSubmitTicketDiv = document.querySelector('.confirm-submit-ticket')
    const tbody = document.querySelector('tbody')
    payBtn.style.display = 'none'
    tbody.textContent = ''
    confirmSubmitTicketDiv.style.display = 'block'
    ticketsValues.forEach((ticket) => {
        const tr = document.createElement('tr')
        const tdName = document.createElement('td')
        tdName.textContent = ticket.name
        const tdCpf = document.createElement('td')
        tdCpf.style.fontSize = '11px'
        tdCpf.textContent = ticket.cpf
        const tdType = document.createElement('td')
        tdType.textContent = ticket.type === 'adult' ? 'Adulto' : ticket.type === 'kid' ? 'Criança' : 'Bebê';
        const tdRestriction = document.createElement('td')
        tdRestriction.classList.add('td-restriction')
        tdRestriction.textContent = ticket.restriction
        const tdKnow = document.createElement('td')
        tdKnow.textContent = ticket.whoKnows

        tr.append(tdName, tdCpf, tdType, tdRestriction, tdKnow)
        tbody.append(tr)
    })
}

errorBtn.addEventListener('click', () => {
    showHideError('hide')
})

backAndEditBtn.addEventListener('click', () => {
    const confirmSubmitTicketDiv = document.querySelector('.confirm-submit-ticket')
    confirmSubmitTicketDiv.style.display = 'none'
    payBtn.style.display = 'block'
    ticketsSoldByStudent = {}
})

startBtn.addEventListener('click', () => {
    const infoDiv = document.querySelector('.info')
    infoDiv.style.display = 'none'
})

infoBtn.addEventListener('click', () => {
    const infoDiv = document.querySelector('.info')
    infoDiv.style.display = 'block'
})

maxTicketsStudentsBtn.addEventListener('click', () => {
    maxTicketsStudentDiv.style.display = 'none'
    ticketsSoldByStudent = {}
})

addTicketButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (availableTickets > 0) {
            payBtn.style.display = 'block'
            const newTicket = document.createElement("div")
            newTicket.classList.add("ticket")
            newTicket.classList.add(`ticket${ticketIndex}`)
            newTicket.setAttribute("data-index", ticketIndex)
            newTicket.setAttribute("data-know", "not-selected")
            
            const newTicketResult = document.createElement("div")
            newTicketResult.classList.add("result-preview")
            newTicketResult.classList.add(`result-preview${ticketIndex}`)
            newTicketResult.setAttribute("data-index", ticketIndex)
    
            ticketsIndexes.push(ticketIndex)
    
            newTicket.innerHTML = `
            <div class="ticket-texts ticket-texts${ticketIndex}">
                <h3 class="ticket-type${ticketIndex}">Ingresso Adulto</h3>
                <div class="ticket-content ticket-name">
                    <label for="iname">Nome:</label>
                    <input class="iname iname${ticketIndex}" type="text" name="iname" id="" placeholder="Nome e Sobrenome"><br>
                </div>
                <div class="error errorname${ticketIndex}">
                    <p>Formatação Incorreta, favor preencher o campo com nome e sobrenome!</p>
                </div>
                <div class="ticket-content ticket-cpf">
                    <label for="icpf">CPF:</label>
                    <input class="icpf icpf${ticketIndex}" type="text" name="icpf" id="" pattern="[0-9]*" inputmode="numeric" placeholder="XXXXXXXXXXX" maxlength="11">
                </div>
                <div class="error errorcpf${ticketIndex}">
                    <p>Ocorreu um erro na formatação do cpf, tenha certeza que você digitou corretamente!</p>
                </div>
                <div class="ticket-content ticket-birth ticket-birth${ticketIndex}">
                    <label for="ibirth">Data de <br> Nascimento:</label>
                    <input class="ibirth ibirth${ticketIndex}" type="date" name="ibirth" id=""><br>
                </div>
                <div class="error errorbirth${ticketIndex}">
                    <p>Favor Completar o campo!</p>
                </div>
                <div class="ticket-content restriction-div">
                    <label class="rest-label" for="irestriction">Possui alguma restrição alimentar?</label>
                    <textarea class="irestriction irestriction${ticketIndex}" name="irestriction" id="irestriction" maxlength="150" placeholder="Se sim, digite aqui..."></textarea>
                </div>
                <div class="ticket-content ticket-students ticket-students${ticketIndex}">
                    <label for="ilist-student">Alunos:</label>
                    <select class="list-students list-students${ticketIndex}">
                        <option value="">Selecione um nome</option>
                        <optgroup label="GASTRONOMIA">
                            <option value="Gastronomia - Ana Paula Einsfeld">Ana Paula Einsfeld</option>
                            <option value="Gastronomia - Bruna Bortolatto">Bruna Bortolatto</option>
                            <option value="Gastronomia - Fernando Fagherazzi Pizzoli">Fernando Fagherazzi Pizzoli</option>
                            <option value="Gastronomia - Gabrielli Selistre">Gabrielli Selistre</option>
                            <option value="Gastronomia - Isabeli Slongo Padilha">Isabeli Slongo Padilha</option>
                            <option value="Gastronomia - Isadora Berton Corso">Isadora Berton Corso</option>
                            <option value="Gastronomia - Julia Cristina Galvăo Ribas">Júlia Cristina Galvăo Ribas</option>
                            <option value="Gastronomia - Marcella Finger Viezzer">Marcella Finger Viezzer</option>
                            <option value="Gastronomia - Maria Eduarda Gaiardo">Maria Eduarda Gaiardo</option>
                            <option value="Gastronomia - Pedro Schio Ferrigo">Pedro Schio Ferrigo</option>
                            <option value="Gastronomia - Rafael Garcia Dias">Rafael Garcia Dias</option>
                            <option value="Gastronomia - Valentina Viecelli Dornelles">Valentina Viecelli Dornelles</option>
                            <option value="Gastronomia - Vitoria Luiza Cabral de Jesus">Vitória Luiza Cabral de Jesus</option>
                        </optgroup>
                        <optgroup label="ADMINISTRAÇÃO">
                            <option value="ADM - Aleander Schuster de Almeida">Aleander Schuster de Almeida</option>
                            <option value="ADM - Ana Vitoria Rodrigues">Ana Vitória Rodrigues</option>
                            <option value="ADM - Augusto Danieleski Tomanchievicz">Augusto Danieleski Tomanchievicz</option>
                            <option value="ADM - Bernardo Camargo Forini">Bernardo Camargo Forini</option>
                            <option value="ADM - Cinara Camargo da Silva">Cinara Camargo da Silva</option>
                            <option value="ADM - Eduarda Leite da Rosa">Eduarda Leite da Rosa</option>
                            <option value="ADM - Fernanda Marca">Fernanda Marca</option>
                            <option value="ADM - Giovanna Caldas Lopes">Giovanna Caldas Lopes</option>
                            <option value="ADM - Isadora Manini Costa">Isadora Manini Costa</option>
                            <option value="ADM - Lais Arruda Koche">Laís Arruda Köche</option>
                            <option value="ADM - Laura Borges Cardoso">Laura Borges Cardoso</option>
                            <option value="ADM - Leticia Machado Gil">Letícia Machado Gil</option>
                            <option value="ADM - Luisa dos Santos da Silva">Luísa dos Santos da Silva</option>
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
                            <option value="Informatica - Alana Pereira Pegoraro">Alana Pereira Pegoraro</option>
                            <option value="Informatica - Anna Carolina Couto Leal">Anna Carolina Couto Leal</option>
                            <option value="Informatica - Arthur da Fonseca Macedo">Arthur da Fonseca Macedo</option>
                            <option value="Informatica - Arthur Forni">Arthur Forni</option>
                            <option value="Informatica - Augusto Branchi Graebin">Augusto Branchi Graebin</option>
                            <option value="Informatica - Augusto Henrique Cerutti">Augusto Henrique Cerutti</option>
                            <option value="Informatica - Augusto Moroni dos Santos">Augusto Moroni dos Santos</option>
                            <option value="Informatica - Augusto Varisco Knapp">Augusto Varisco Knapp</option>
                            <option value="Informatica - Bernardo Azevedo Vieira">Bernardo Azevedo Vieira</option>
                            <option value="Informatica - Bianca Elisa Rossa">Bianca Elisa Rossa</option>
                            <option value="Informatica - Camila Brollo Macedo">Camila Brollo Macêdo</option>
                            <option value="Informatica - Claudia Oliveira da Cruz">Cláudia Oliveira da Cruz</option>
                            <option value="Informatica - Cristian Rafael Metz">Cristian Rafael Metz</option>
                            <option value="Informatica - Daniel Damin Zamboni">Daniel Damin Zamboni</option>
                            <option value="Informatica - Diego Silveira da Silva">Diego Silveira da Silva</option>
                            <option value="Informatica - Enzo Matana da Silva">Enzo Matana da Silva</option>
                            <option value="Informatica - Gabriel Bado da Silva">Gabriel Bado da Silva</option>
                            <option value="Informatica - Gabriel Frizzo Ciervo">Gabriel Frizzo Ciervo</option>
                            <option value="Informatica - Giovana Melos Borsoi">Giovana Melos Borsoi</option>
                            <option value="Informatica - Guilherme Augusto Velho de Oliveira">Guilherme Augusto Velho de Oliveira</option>
                            <option value="Informatica - Guilherme Scomazzon Tamagno">Guilherme Scomazzon Tamagno</option>
                            <option value="Informatica - Gustavo Carneiro dos Santos">Gustavo Carneiro dos Santos</option>
                            <option value="Informatica - Henrique Brum Riva">Henrique Brum Riva</option>
                            <option value="Informatica - Janaina Giacomin">Janaína Giacomin</option>
                            <option value="Informatica - Jean Vitor Dalla Vecchia Boniatti">Jean Vítor Dalla Vecchia Boniatti</option>
                            <option value="Informatica - Jhonatan de Lima de Almeida">Jhonatan de Lima de Almeida</option>
                            <option value="Informatica - Joao Henrique Camara Piccin">João Henrique Camara Piccin</option>
                            <option value="Informatica - Joao Pedro de Castro Pereira">João Pedro de Castro Pereira</option>
                            <option value="Informatica - Joao Pedro de Godoi da Silva">João Pedro de Godoi da Silva</option>
                            <option value="Informatica - Joao Victor Silveira Ferraz">João Victor Silveira Ferraz</option>
                            <option value="Informatica - Johann Heckler Mota">Johann Heckler Mota</option>
                            <option value="Informatica - Julia Giordano Bianchi">Júlia Giordano Bianchi</option>
                            <option value="Informatica - Julia Salvador Righez">Júlia Salvador Righez</option>
                            <option value="Informatica - Leonardo Teles Cesar">Leonardo Teles Cesar</option>
                            <option value="Informatica - Leonora Sagas Rodrigues Viera">Leonora Sagas Rodrigues Viera</option>
                            <option value="Informatica - Luana Reginato Bassanesi">Luana Reginato Bassanesi</option>
                            <option value="Informatica - Luis Henrique Bonetto">Luís Henrique Bonetto</option>
                            <option value="Informatica - Lucca Marchett Frozza">Lucca Marchett Frozza</option>
                            <option value="Informatica - Maria Clara Sirtoli Lazaretti">Maria Clara Sirtoli Lazaretti</option>
                            <option value="Informatica - Maria Klein Pinheiro Machado">Maria Klein Pinheiro Machado</option>
                            <option value="Informatica - Mariana Weschenfelder Glasenapp">Mariana Weschenfelder Glasenapp</option>
                            <option value="Informatica - Matheus Cassanego">Matheus Cassânego</option>
                            <option value="Informatica - Matheus Concari Metz">Matheus Concari Metz</option>
                            <option value="Informatica - Mauricio Bono Nunes">Maurício Bono Nunes</option>
                            <option value="Informatica - Miguel Valentini">Miguel Valentini</option>
                            <option value="Informatica - Murilo Lazzari Gasperin">Murilo Lazzari Gasperin</option>
                            <option value="Informatica - Natalia de Azevedo">Natália de Azevedo</option>
                            <option value="Informatica - Nicolas Buzin Gomes">Nícolas Buzin Gomes</option>
                            <option value="Informatica - Nicolas Hunhoff Servelin">Nícolas Hunhoff Servelin</option>
                            <option value="Informatica - Nicolas Menon Simiano">Nicolas Menon Simiano</option>
                            <option value="Informatica - Nicolas Schein Brakemeier">Nicolas Schein Brakemeier</option>
                            <option value="Informatica - Octavio Henrique Rodrigues Alves">Octavio Henrique Rodrigues Alves</option>
                            <option value="Informatica - Pedro Henrique Negrini Perondi">Pedro Henrique Negrini Perondi</option>
                            <option value="Informatica - Rayana Sofia Rizzi">Rayana Sofia Rizzi</option>
                            <option value="Informatica - Vinicius Menegol Cardoso">Vinícius Menegol Cardoso</option>
                            <option value="Informatica - Yago Rech de Jesus">Yago Rech de Jesus</option>            
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
                <div class="know-div know-div${ticketIndex}">
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
                const birthContent = newTicket.querySelector(`.ticket-birth${ticketIndex}`);
                birthContent.style.display = 'none'
                totalValue += adultPrice
                totalValueText.innerHTML = `R$${totalValue}`
                newTicket.classList.add("ticket-adult")
            }
            if (button.classList.contains("addKidTicketBtn")) {
                totalValue += kidPrice
                totalValueText.innerHTML = `R$${totalValue}`
                const ticketType = document.querySelector(`.ticket-type${ticketIndex}`);
                const resultType = document.querySelector(`.result-type${ticketIndex}`);
                const resultValue = document.querySelector(`.result-value${ticketIndex}`);
                ticketType.textContent = 'Ingresso Criança';
                resultType.textContent = 'Ingresso Criança'
                resultValue.textContent = `R$${kidPrice},00`;
                newTicket.classList.add("ticket-kid")
                // const c = document.querySelector(`.ibirth${ticketIndex}`)
                // c.value = '2017-03-26'
            }
            if (button.classList.contains("addBabyTicketBtn")) {
                newTicket.classList.add("ticket-baby")
                const ticketType = document.querySelector(`.ticket-type${ticketIndex}`);
                const resultType = document.querySelector(`.result-type${ticketIndex}`);
                const resultValue = document.querySelector(`.result-value${ticketIndex}`);
                ticketType.textContent = 'Ingresso Bebê';
                resultType.textContent = 'Ingresso Bebê'
                resultValue.textContent = `R$00,00`;
                newTicket.classList.add("ticket-baby")
                // const c = document.querySelector(`.ibirth${ticketIndex}`)
                // c.value = '2023-03-26'
            }
    
            const knowButtons = newTicket.querySelectorAll('.know-btn');
            knowButtons.forEach(knowButton => {
                knowButton.addEventListener('click', () => {
                    const dataKnowValue = knowButton.getAttribute('data-value');
                    newTicket.setAttribute('data-know', dataKnowValue);
                });
            });
    
            const a = document.querySelector(`.iname${ticketIndex}`)
            a.value = 'Miguel Silva'
            const b = document.querySelector(`.icpf${ticketIndex}`)
            b.value = '12345678900'
    
            ticketIndex += 1
            availableTickets -= 1
            updateTicketsText(`${availableTickets}`)
        } else {
            const maxTicketsDiv = document.querySelector('.max-tickets')
                maxTicketsDiv.style.display='block'
                maxTicketsBtn.addEventListener('click', () => {
                    maxTicketsDiv.style.display = 'none'
                })
        }
    });
})


// EXIBIR E ESCONDER DIVS DE 'QUEM VC CONHECE'
ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("know-btn")) {
        const target = event.target;
        const ticketIndex = target.classList[1].split("know-btn")[1];
        const typeValue = target.getAttribute("data-value");
        const studentsDiv = document.querySelector(`.ticket-students${ticketIndex}`);
        const studentsNTechDiv = document.querySelector(`.ticket-student-n-tech${ticketIndex}`);
        const teacherDiv = document.querySelector(`.ticket-teacher${ticketIndex}`);
        const selectAlunos = document.querySelector(`.list-students${ticketIndex}`);
        const activeColor = "#c08e43";
        const inactiveColor = "#eaaf56";
        
        const allButtons = document.querySelectorAll(`.know-btn${ticketIndex}`);
        allButtons.forEach((button) => {
            button.classList.remove("active");
            button.style.backgroundColor = inactiveColor;
        });
        target.classList.add("active");

        target.style.backgroundColor = activeColor;
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

// EXCLUIR INGRESSOS
ticketsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const button = event.target;
        const ticket = button.closest(".ticket");
        availableTickets += 1
        updateTicketsText()
        const countAllTickets = document.querySelectorAll('.ticket').length - 1

        if (ticket) {
            ticketsSoldByStudent = {}
            if (countAllTickets === 0) {
                payBtn.style.display = 'none'
            }
            let ticketType = ''
            if (ticket.classList.contains("ticket-adult")) {
                ticketType = "adult"
            } else if (ticket.classList.contains("ticket-kid")) {
                ticketType = "kid"
            } else if (ticket.classList.contains("ticket-baby")) {
                ticketType = "baby"
            }
            const ticketIndexToDelete = parseInt(ticket.getAttribute("data-index"));

            const indexToRemove = ticketsIndexes.indexOf(ticketIndexToDelete);

            if (indexToRemove !== -1) {
                ticketsIndexes.splice(indexToRemove, 1); // Remover o índice da lista
            }

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

            ticketResults.forEach((ticketResult) => {
                let currentIndex = parseInt(ticketResult.getAttribute("data-index"));

                if (currentIndex > ticketIndexToDelete) {
                    currentIndex -= 1;
                    ticketResult.setAttribute("data-index", currentIndex);
                }
            });
        }
    }
});

payBtn.addEventListener('click', () => {
    const ticketElements = document.querySelectorAll('.ticket');

    ticketsValues.length = 0

    let allTicketsValid = true;

    ticketElements.forEach((ticketElement, index) => {
        const nameInput = document.querySelector(`.iname${ticketsIndexes[index]}`);
        const cpfInput = document.querySelector(`.icpf${ticketsIndexes[index]}`);
        const birthInput = document.querySelector(`.ibirth${ticketsIndexes[index]}`);
        const restrictionTextarea = document.querySelector(`.irestriction${ticketsIndexes[index]}`);
        const dataKnowValue = ticketElement.getAttribute('data-know');
        let ticketType = 
            ticketElement.classList.contains("ticket-adult") ? "adult" :
            ticketElement.classList.contains("ticket-kid") ? "kid" :
            ticketElement.classList.contains("ticket-baby") ? "baby" : '';
        
        let age = 'Não preenchido' 

        const isNameValid = nameRegex.test(nameInput.value);
        const isCPFValid = cpfRegex.test(cpfInput.value)
        const isBirthValid = birthInput.value !== '';
        restrictionTextarea.setAttribute('id', 'success-completing')
        
        if (isNameValid) {
            nameInput.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            document.querySelector(`.errorname${ticketsIndexes[index]}`).style.display = "none";
        } else {
            allTicketsValid = false
            nameInput.setAttribute('id', 'unsuccess-completing');
            document.querySelector(`.errorname${ticketsIndexes[index]}`).style.display = "block";
            ticketElement.setAttribute('id', 'unsuccess-completing');
            showHideError('show')
        }
        if (ticketType === 'adult') {
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "none"
            if (isCPFValid) {
                cpfInput.setAttribute('id', 'success-completing');
                ticketElement.setAttribute('id', 'success-completing');
                document.querySelector(`.errorcpf${ticketsIndexes[index]}`).style.display = "none";
            } else {
                allTicketsValid = false;
                cpfInput.setAttribute('id', 'unsuccess-completing');
                document.querySelector(`.errorcpf${ticketsIndexes[index]}`).style.display = "block";
                ticketElement.setAttribute('id', 'unsuccess-completing');
                showHideError('show');
            }
        }
        if (ticketType === 'kid' || ticketType === 'baby') {
            cpfInput.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            document.querySelector(`.errorcpf${ticketsIndexes[index]}`).style.display = "none";
        }
        if (isBirthValid && ticketType === 'kid') {
            birthInput.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            const birthDate = new Date(birthInput.value);
            const today = new Date();
            age = today.getFullYear() - birthDate.getFullYear();
        } else if (!isBirthValid && ticketType === 'kid') {
            allTicketsValid = false
            birthInput.setAttribute('id', 'unsuccess-completing');
            ticketElement.setAttribute('id', 'unsuccess-completing');
            showHideError('show')
        } else if (isBirthValid && ticketType === 'baby') {
            birthInput.setAttribute('id', 'success-completing');
            ticketElement.setAttribute('id', 'success-completing');
            const birthDate = new Date(birthInput.value);
            const today = new Date();
            age = today.getFullYear() - birthDate.getFullYear();
        } else if (!isBirthValid && ticketType === 'baby') {
            allTicketsValid = false
            birthInput.setAttribute('id', 'unsuccess-completing');
            ticketElement.setAttribute('id', 'unsuccess-completing');
            showHideError('show')
        } 
    
        const ticketValues = {
            idTicket: index,
            name: nameInput.value,
            cpf: cpfInput.value,
            restriction: restrictionTextarea.value,
            whoKnows: 'Ninguem',
            type: ticketType,
            idComprador: idBuyer
        };

        if (dataKnowValue === 'yes-student') {
            const studentSelect = document.querySelector(`.list-students${ticketsIndexes[index]}`);
            const studentName = studentSelect.value;
            const studentType = studentName.startsWith('Gastronomia') ? 'Gastronomia' :
            studentName.startsWith('ADM') ? 'ADM' :'Informatica'
            if (studentType === 'Gastronomia') {
                if (!(studentName in ticketsSoldByStudent)) {
                    ticketsSoldByStudent[studentName] = 1;
                } else {
                    ticketsSoldByStudent[studentName] += 1
                    if (ticketsSoldByStudent[studentName] > limitTickets['Gastronomia']) {
                        allTicketsValid = false
                        maxTicketsStudentDiv.style.display = 'block'
                    }
                }
            } else if (studentType === 'ADM') {
                if (!(studentName in ticketsSoldByStudent)) {
                    ticketsSoldByStudent[studentName] = 1;
                } else {
                    ticketsSoldByStudent[studentName] += 1
                    if (ticketsSoldByStudent[studentName] > limitTickets['Administração']) {
                        allTicketsValid = false
                        maxTicketsStudentDiv.style.display = 'block'
                    }
                }
            } else if (studentType === 'Informatica') {
                if (!(studentName in ticketsSoldByStudent)) {
                    ticketsSoldByStudent[studentName] = 1;
                } else {
                    ticketsSoldByStudent[studentName] += 1
                    if (ticketsSoldByStudent[studentName] > limitTickets['Informática']) {
                        allTicketsValid = false
                        maxTicketsStudentDiv.style.display = 'block'
                    }
                }
            } 
            
            const studentTechName = document.querySelector(`.list-students${ticketsIndexes[index]}`)
            const isStudentTechNameValid = studentTechName.value !== ''
            if (!isStudentTechNameValid) {
                allTicketsValid = false;
                studentTechName.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing')
                showHideError('show')
            } else {
                studentTechName.setAttribute('id', 'success-completing')
                ticketElement.setAttribute('id', 'success-completing')
                ticketValues.whoKnows = `Tecnico: ${studentTechName.value}`
            }
        } else if (dataKnowValue === 'yes-student-n-tech') {
            const studentNTechName = document.querySelector(`.istudent-n-tech${ticketsIndexes[index]}`)
            const isStudentNTechNameValid = nameRegex.test(studentNTechName.value)
            if (!isStudentNTechNameValid) {
                allTicketsValid = false;
                studentNTechName.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing')
                showHideError('show')
            } else {
                studentNTechName.setAttribute('id', 'success-completing')
                ticketElement.setAttribute('id', 'success-completing')
                ticketValues.whoKnows = `Nao Tecnico: ${studentNTechName.value}`
            }
        } else if (dataKnowValue === 'yes-teacher') {
            const teacherName = document.querySelector(`.iteacher-name${ticketsIndexes[index]}`)
            const isTeacherNameValid = nameRegex.test(teacherName.value)
            if (!isTeacherNameValid) {
                allTicketsValid = false;
                teacherName.setAttribute('id', 'unsuccess-completing')
                ticketElement.setAttribute('id', 'unsuccess-completing')
                showHideError('show')
            } else {
                teacherName.setAttribute('id', 'success-completing')
                ticketElement.setAttribute('id', 'success-completing')
                ticketValues.whoKnows = `Professor: ${teacherName.value}`
            }
        } else if (dataKnowValue === 'not-selected') {
            const knowDiv = document.querySelector(`.know-div${ticketsIndexes[index]}`)
            knowDiv.setAttribute('id', 'unsuccess-completing')
            ticketElement.setAttribute('id', 'unsuccess-completing')
            allTicketsValid = false
            showHideError('show')
            ticketValues.whoKnows = 'Ninguem'
        } else {
            const knowDiv = document.querySelector(`.know-div${ticketsIndexes[index]}`)
            knowDiv.setAttribute('id', 'success-completing')
            ticketElement.setAttribute('id', 'success-completing')
        }

        if (birthInput.value === '' && ticketType !== 'adult'){
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "block";
        } else if (ticketType === 'kid' && !(age >= minKidAge && age <= maxKidAge)) {
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "none";
            const confirm = window.confirm(`Data inválida! A data digitada não corresponde com a data para criança. Deseja transformar esse ingresso em adulto?`)
            allTicketsValid = false;
            ticketElement.setAttribute('id', 'unsuccess-completing');
            birthInput.setAttribute('id', 'unsuccess-completing');
            
            if (confirm) {
                ticketElement.classList.remove('ticket-kid')
                ticketElement.classList.add('ticket-adult')
                totalValue -= kidPrice;
                totalValue += adultPrice;
                totalValueText.innerHTML = `R$${totalValue}`;
    
                const ticketType = document.querySelector(`.ticket-type${ticketsIndexes[index]}`);
                const resultType = document.querySelector(`.result-type${ticketsIndexes[index]}`);
                const resultValue = document.querySelector(`.result-value${ticketsIndexes[index]}`);
                const birthContent = document.querySelector(`.ticket-birth${ticketsIndexes[index]}`);

                ticketType.textContent = 'Ingresso Adulto';
                resultType.textContent = 'Ingresso Adulto';
                resultValue.textContent = `R$${adultPrice},00`;
                birthContent.style.display = 'none';
            }
        } else if (ticketType === 'kid' && (age >= minKidAge && age <= maxKidAge)) {
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "none";
        } else if (ticketType === 'baby' && !(age >= 0 && age <= 3)) {
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "none";
            const confirm = window.confirm(`Data inválida! A data digitada não corresponde com a data para bebê. Deseja transformar esse ingresso em adulto?`)
            allTicketsValid = false;
            ticketElement.setAttribute('id', 'unsuccess-completing');
            birthInput.setAttribute('id', 'unsuccess-completing');
            
            if (confirm) {
                ticketElement.classList.remove('ticket-baby')
                ticketElement.classList.add('ticket-adult')
                totalValue += adultPrice;
                totalValueText.innerHTML = `R$${totalValue}`;
    
                const ticketType = document.querySelector(`.ticket-type${ticketsIndexes[index]}`);
                const resultType = document.querySelector(`.result-type${ticketsIndexes[index]}`);
                const resultValue = document.querySelector(`.result-value${ticketsIndexes[index]}`);
                const birthContent = document.querySelector(`.ticket-birth${ticketsIndexes[index]}`);

                ticketType.textContent = 'Ingresso Adulto';
                resultType.textContent = 'Ingresso Adulto';
                resultValue.textContent = `R$${adultPrice},00`;
                birthContent.style.display = 'none';
            }
        } else if (ticketType === 'baby' && (age >= 0 && age <= 3)) {
            document.querySelector(`.errorbirth${ticketsIndexes[index]}`).style.display = "none";
        }

        ticketsValues.push(ticketValues);
    });

    if (allTicketsValid) {
        confirmSubmitTicket(ticketsValues)
    }
});

confirmSubmitBtn.addEventListener('click', () => {
    payBtn.style.display = 'block'
    const confirmSubmitTicketDiv = document.querySelector('.confirm-submit-ticket')
    const totalValueText = totalValue.toString()
    confirmSubmitTicketDiv.style.display = 'none'
    ticketsValues.forEach((ticket) => {
        InsertSQLTicket("INSERT INTO Ingressos (nome, cpf, restricao, conhecido, tipo, id_Comprador) VALUES ('" + ticket.name.toString() + "', '" + ticket.cpf.toString() + "', '" + ticket.restriction.toString() + "', '" + ticket.whoKnows.toString() + "', '" + ticket.type.toString() + "', '" + ticket.idComprador + "') returning id")
        UpdateSQL("update Compradores set compra = '" + totalValueText + "' where id = " + ticket.idComprador + ";")
    })
    setTimeout(() => {
        window.location.href = './payment.html'
     }, 1000);
    localStorage.setItem('value', totalValue)
    sessionStorage.setItem('teste', 'teste')
})