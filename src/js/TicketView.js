/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */

// export default class TicketView {
//   constructor(container) {
//     this.container = container;
//   }

//   renderTicket(ticket) {
//     return `
//       <div class="ticket" data-id="${ticket.id}">
//         <div class="ticket-info">
//           <div class="status ${ticket.status ? 'done' : ''}">✓</div>
//           <h3>${ticket.name}</h3>
//           <time>${ticket.created}</time>
//         </div>
//         <div class="ticket-actions">
//           <button class="edit-btn">✎</button>
//           <button class="delete-btn">✕</button>
//         </div>
//       </div>
//     `;
//   }

//   render(tickets) {
//     this.container.innerHTML = tickets.map((ticket) => this.renderTicket(ticket)).join('');
//   }
// }

export class TicketView {
  static render(ticket) {
    const ticketEl = document.createElement('div');
    ticketEl.className = 'ticket';
    ticketEl.dataset.id = ticket.id;
    ticketEl.innerHTML = `
      <input type="checkbox" class="ticket-status" ${ticket.status ? 'checked' : ''}>
      <span class="ticket-name">${ticket.name}</span>
      <span class="ticket-date">${ticket.created}</span>
      <button class="edit-ticket">✎</button>
      <button class="delete-ticket">✖</button>
    `;
    return ticketEl;
  }
}
