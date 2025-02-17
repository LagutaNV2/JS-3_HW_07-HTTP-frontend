/**
 *  Основной класс приложения
 * */

import TicketService from './TicketService';
import TicketView from './TicketView';

export default class HelpDesk {
  constructor(container) {
    this.container = container;
    this.loadTickets();
    this.container.addEventListener('click', this.handleClick.bind(this));
  }

  async loadTickets() {
    this.container.innerHTML = '';
    const tickets = await TicketService.getAllTickets();
    tickets.forEach((ticket) => {
      this.container.appendChild(TicketView.render(ticket));
    });
  }

  async handleClick(event) {
    const ticketEl = event.target.closest('.ticket');
    if (!ticketEl) return;

    const { id } = ticketEl.dataset;

    if (event.target.classList.contains('delete-ticket')) {
      await TicketService.deleteTicket(id);
      this.loadTickets();
    }

    if (event.target.classList.contains('edit-ticket')) {
      // Вызовем модальное окно редактирования
      // Вызовем модальное окно редактирования
      // handle edit ticket logic here
    }

    if (event.target.classList.contains('ticket-status')) {
      await TicketService.updateTicket(id, { status: event.target.checked });
      this.loadTickets();
    }
  }
}
