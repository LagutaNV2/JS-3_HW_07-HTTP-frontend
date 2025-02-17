/**
 *  Основной класс приложения
 * */

import TicketService from './TicketService';
import TicketView from './TicketView';
import Ticket from './Ticket';
import TicketForm from './TicketForm';
import DeleteModal from './DeleteModal';

// export default class HelpDesk {
//   constructor(container) {
//     this.container = container;
//     this.loadTickets();
//     this.container.addEventListener('click', this.handleClick.bind(this));
//     this.ticketService = new TicketService();
//   }

//   // async loadTickets() {
//   //   try {
//   //     this.container.innerHTML = ''; // Очищаем контейнер перед загрузкой

//   //     const tickets = await TicketService.getAllTickets(); // Получаем все тикеты через сервис
//   //     tickets.forEach((ticket) => {
//   //       this.container.appendChild(TicketView.render(ticket)); // Рендерим каждый тикет
//   //     });
//   //   } catch (error) {
//   //     console.error('Ошибка при загрузке тикетов:', error.message);
//   //   }
//   // }

//   async loadTickets() {
//     const tickets = await this.ticketService.getTickets();
//     this.container.innerHTML = '';

//     tickets.forEach((ticket) => {
//       const ticketElement = new Ticket(ticket);
//       const element = ticketElement.render();

//       // Кнопка редактирования
//       element.querySelector('.edit-btn').addEventListener('click', () => {
//         TicketForm.showForm(ticket, async (updatedData) => {
//           await this.ticketService.updateTicket(ticket.id, updatedData);
//           this.loadTickets();
//         });
//       });

//       // Кнопка удаления
//       element.querySelector('.delete-btn').addEventListener('click', () => {
//         DeleteModal(async () => {
//           await this.ticketService.deleteTicket(ticket.id);
//           this.loadTickets();
//         });
//       });

//       this.container.appendChild(element);
//     });
//   }

//   async handleClick(event) {
//     const ticketEl = event.target.closest('.ticket');
//     if (!ticketEl) return;

//     const { id } = ticketEl.dataset;

//     if (event.target.classList.contains('delete-ticket')) {
//       await TicketService.deleteTicket(id);
//       this.loadTickets();
//     }

//     if (event.target.classList.contains('edit-ticket')) {
//       // Вызовем модальное окно редактирования
//       // Вызовем модальное окно редактирования
//       // handle edit ticket logic here
//     }

//     if (event.target.classList.contains('ticket-status')) {
//       await TicketService.updateTicket(id, { status: event.target.checked });
//       const currentStatus = event.target.classList.contains('checked');
//       await TicketService.updateTicket(id, { status: !currentStatus });
//       event.target.classList.toggle('checked');
//       event.target.textContent = !currentStatus ? '✓' : '';
//     }
//   }
// }

export default class HelpDesk {
  constructor(container, service) {
    if (!service) throw new Error('TicketService не предоставлен!');
    this.container = container;
    this.service = service;
    this.view = new TicketView(container);
    this._bindEvents();
    this._refreshTickets();
  }

  _bindEvents() {
    // Обработчик изменения статуса
    this.container.addEventListener('click', async (e) => {
      const ticketElement = e.target.closest('.ticket');
      if (!ticketElement) return;

      const id = ticketElement.dataset.id;

      if (e.target.classList.contains('status')) {
        const currentStatus = ticketElement.classList.contains('done');
        await this.service.update(id, {
          status: !currentStatus
        });
        this._refreshTickets();
      }
    });

  }

  async _refreshTickets() {
    try {
      const tickets = await this.service.list();
      this.view.render(tickets);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    }
  }
}
