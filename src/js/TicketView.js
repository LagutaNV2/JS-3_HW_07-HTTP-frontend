/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */

export default class TicketView {
  static render(ticket) {
    const ticketEl = document.createElement('div');
    // ticketEl.className = 'ticket';
    ticketEl.classList.add('ticket');
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
