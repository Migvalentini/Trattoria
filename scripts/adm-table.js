const a = 'oi'
localStorage.setItem('buyer', 123)
localStorage.setItem('diego','gay')
const buyersData = [
   {
      id: 1,
      name: 'João da Silva',
      phone: '54987654321',
      cpf: '12345678901',
      email: 'joao@example.com',
      paid: 'Não',
      purchase: '110',
      voucher: null,
   },
   {
     id: 2,
     name: 'Maria Souza',
     phone: '54123456789',
     cpf: '98765432101',
     email: 'maria@example.com',
     paid: 'Não',
     purchase: '220',
     voucher: null,
   },
 ];

const ticketsData = [
   {
      id: 1,
      type: 'Adulto',
      name: 'Miguel Valentini',
      cpf: '12345678901',
      restriction: 'None',
      acquaintance: 'Técnico: Informática - Daniel Zamboni',
      buyerId: 1,
   },
   {
      id: 2,
      type: 'Criança',
      name: 'Diego da Silva',
      cpf: '98765432101',
      restriction: 'Vegetariano',
      acquaintance: 'Fulano',
      buyerId: 2,
   },
   {
      id: 3,
      type: 'Criança',
      name: 'Diego da Silva',
      cpf: '98765432101',
      restriction: 'Vegano',
      acquaintance: 'Ciclano',
      buyerId: 2,
   },
];

const data = {
   Buyers: buyersData,
   Tickets: ticketsData,
};


const table = document.querySelector('.table table tbody');

data.Buyers.forEach((buyer, index) => {
   const row = document.createElement('tr');

   row.innerHTML = `
      <td class="name-${index}">${buyer.name}</td>
      <td class="phone-${index}">${buyer.phone}</td>
      <td class="ticket-td-${index}">
         <ul class="ticket-${index}">
         </ul>
      </td>
      <td class="value-${index}">R$${buyer.purchase}</td>
      <td>${buyer.paid}</td>
      <td><a href="#">Link do comprovante</a></td>
      <td><input type="checkbox" name="confirm" id="confirm confirm-${index}"></td>
  `;

  table.appendChild(row);

  const ticketsList = row.querySelector(`.ticket-${index}`);

  data.Tickets.forEach((ticket) => {
    if (ticket.buyerId === buyer.id) {
      const ticketDiv = document.createElement('div')
      ticketDiv.classList.add('ticket')
      const ticketItem = document.createElement('ul');
      ticketItem.innerHTML = `
         <li>Ingresso ${ticket.type}: ${ticket.name}</li>
         <li>CPF: ${ticket.cpf}</span></li>
         <li>Restrição: ${ticket.restriction}</li>
         <li>Referência: ${ticket.acquaintance}</li>
      `;

      ticketDiv.appendChild(ticketItem)
      ticketsList.appendChild(ticketDiv);
    }
  });
});
