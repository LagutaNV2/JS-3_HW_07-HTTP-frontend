/**
 *  Класс для создания формы создания нового тикета
 * */

// export default class TicketForm {
//   constructor() {
//     this.form = document.createElement('div');
//     this.form.className = 'modal';
//     this.form.innerHTML = `
//       <div class="modal-content">
//         <h3>Добавить тикет</h3>
//         <input type="text" class="ticket-name" placeholder="Название">
//         <textarea class="ticket-description" placeholder="Описание"></textarea>
//         <div class="modal-actions">
//           <button class="cancel-btn">Отмена</button>
//           <button class="submit-btn">OK</button>
//         </div>
//       </div>
//     `;
//   }

//   open() {
//     document.body.appendChild(this.form);
//   }

//   close() {
//     document.body.removeChild(this.form);
//   }
// }

import TicketService from './TicketService';

export default class TicketForm {
  static showForm(ticket = {}) {
    const form = document.createElement('div');
    form.className = 'modal';
    form.innerHTML = `
      <div class="modal-content">
        <input type="text" id="ticket-name" value="${ticket.name || ''}" placeholder="Название">
        <textarea id="ticket-desc">${ticket.description || ''}</textarea>
        <button id="save-ticket">Сохранить</button>
        <button id="cancel">Отмена</button>
      </div>
    `;

    document.body.appendChild(form);

    form.querySelector('#cancel').addEventListener('click', () => form.remove());

    form.querySelector('#save-ticket').addEventListener('click', async () => {
      const name = document.getElementById('ticket-name').value;
      const description = document.getElementById('ticket-desc').value;

      if (ticket.id) {
        await TicketService.updateTicket(ticket.id, { name, description });
      } else {
        await TicketService.createTicket({ name, description, status: false });
      }

      form.remove();
      window.helpDesk.loadTickets();
    });
  }
}
