/**
 *  Класс для создания формы создания нового тикета
 * */

import TicketService from './TicketService';

export default
class TicketForm {
  static showForm(ticket = {}) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const form = document.createElement('div');
    form.className = 'modal';
    form.innerHTML = `
      <div class="modal-content">
        <h2>Добавить тикет</h2>
        <label for="ticket-name">Краткое описание</label>
        <input type="text" id="ticket-name" class="form-control" value='${ticket.name || ''}' placeholder="Введите название">

        <label for="ticket-desc">Полное описание</label>
        <textarea id="ticket-desc" class="form-control" placeholder="Введите описание">${ticket.description || ''}</textarea>

        <div class="modal-buttons" class="form-actions">
          <button id="save-ticket" class="btn btn-primary">Ok</button>
          <button id="cancel" class="btn btn-secondary">Отмена</button>
        </div>
      </div>
    `;

    overlay.appendChild(form);
    document.body.appendChild(overlay);

    const closeModal = () => overlay.remove();

    form.querySelector('#cancel').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    }, { once: true });

    form.querySelector('#save-ticket').addEventListener('click', async () => {
      const name = document.getElementById('ticket-name').value;
      const description = document.getElementById('ticket-desc').value;

      if (ticket.id) {
        await TicketService.updateTicket(ticket.id, { name, description });
      } else {
        await TicketService.createTicket({ name, description, status: false });
      }

      closeModal();
      window.helpDesk.loadTickets();
    });
  }
}
