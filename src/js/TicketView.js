/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */

import TicketService from './TicketService';

export default class TicketView {
  constructor(container) {
    this.container = container;
  }

  // static async toggleStatus(ticketId) {
  //   try {
  //     const ticket = await TicketService.getTicketById(ticketId);
  //     if (!ticket) {

  //       throw new Error(`Тикет с id ${ticketId} не найден`);
  //     }
  //     // const ticket = await response.json();
  //     const updatedStatus = !ticket.status;

  //     // Обновляем статус тикета
  //     const updateResponse = await fetch('http://localhost:7070/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         method: 'updateById',
  //         id: ticketId,
  //         data: { status: updatedStatus },
  //       }),
  //     });

  //     if (!updateResponse.ok) {
  //       throw new Error(`Ошибка при обновлении статуса: ${updateResponse.status}`);
  //     }

  //     // Обновляем интерфейс
  //     const ticketElement = document.querySelector(`[data-id="${ticketId}"]`);
  //     if (ticketElement) {
  //       const statusIndicator = ticketElement.querySelector('.ticket-status');
  //       statusIndicator.classList.toggle('checked');
  //       statusIndicator.textContent = updatedStatus ? '✓' : '';
  //     }
  //   } catch (error) {
  //     console.warn('Ошибка при изменении статуса:', error.message);
  //   }
  // }

  // static render(ticket) {
  //   const ticketEl = document.createElement('div');
  //   ticketEl.classList.add('ticket');
  //   ticketEl.dataset.id = ticket.id;

  //   // Колонка статуса
  //   const status = document.createElement('div');

  //   status.className = `ticket-status ${ticket.status ? 'checked' : ''}`;
  //   status.textContent = ticket.status ? '✓' : '';

  //   status.addEventListener('click', () => TicketView.toggleStatus(ticket.id));

  //   // Колонка контента
  //   const content = document.createElement('div');
  //   content.className = 'ticket-content';
  //   content.innerHTML = `
  //       <div class="ticket-title">${ticket.name}</div>
  //       <div class="ticket-description">${ticket.description || ''}</div>
  //   `;

  //   // Колонка даты и времени
  //   const date = document.createElement('div');
  //   date.className = 'ticket-date';
  //   const createdDate = new Date(ticket.created);
  //   date.textContent = `${createdDate.toLocaleDateString('ru-RU')} ${createdDate.toLocaleTimeString('ru-RU', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   })}`;

  //   // Колонка действий
  //   const actions = document.createElement('div');
  //   actions.className = 'ticket-actions';
  //   actions.innerHTML = `
  //       <div class="action-btn edit-btn">✎</div>
  //       <div class="action-btn delete-btn">✖</div>
  //   `;

  //   this.ticketElement.querySelector('.edit-btn').addEventListener('click', () => this.onEdit(ticket));
  //   this.ticketElement.querySelector('.delete-btn').addEventListener('click', () => this.onDelete(ticket.id));

  //   // Сборка элементов
  //   ticketEl.append(status, content, date, ...actions.children);

  //   return ticketEl;
  // }
  render(tickets) {
    this.container.innerHTML = tickets.map(ticket => `
      <div class="ticket ${ticket.status ? 'done' : ''}" data-id="${ticket.id}">
        <div class="ticket-info">
          <div class="status">${ticket.status ? '✓' : '◻'}</div>
          <h3>${ticket.name}</h3>
          <time>${new Date(ticket.created).toLocaleString()}</time>
        </div>
        <div class="ticket-actions">
          <button class="edit-btn">✎</button>
          <button class="delete-btn">✕</button>
        </div>
      </div>
    `).join('');
  }
}
