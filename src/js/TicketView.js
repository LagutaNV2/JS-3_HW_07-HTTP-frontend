/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */

export default class TicketView {
  static async toggleStatus(ticketId) {
    try {
      const response = await fetch(`http://localhost:7070/tickets/${ticketId}`);
      const ticket = await response.json();

      const updatedStatus = !ticket.status;

      const updateResponse = await fetch(`http://localhost:7070/tickets/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      if (updateResponse.ok) {
        const ticketElement = document.querySelector(`[data-id="${ticketId}"]`);
        if (ticketElement) {
          const statusIndicator = ticketElement.querySelector('.ticket-status');
          statusIndicator.classList.toggle('checked');
          statusIndicator.textContent = updatedStatus ? '✓' : '';
        }
      }
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
  }

  static render(ticket) {
    const ticketEl = document.createElement('div');
    ticketEl.classList.add('ticket');
    ticketEl.dataset.id = ticket.id;
    // Колонка статуса
    const status = document.createElement('div');
    status.className = `ticket-status ${ticket.status ? 'checked' : ''}`;
    status.textContent = ticket.status ? '✓' : '';
    status.addEventListener('click', () => TicketView.toggleStatus(ticket.id));
    // Колонка контента
    const content = document.createElement('div');
    content.className = 'ticket-content';
    content.innerHTML = `
        <div class="ticket-title">${ticket.name}</div>
        <div class="ticket-description">${ticket.description || ''}</div>
    `;

    // Колонка даты и времени
    const date = document.createElement('div');
    date.className = 'ticket-date';
    const createdDate = new Date(ticket.created);
    date.textContent = `${createdDate.toLocaleDateString('ru-RU')} ${createdDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    })}`;

    // Колонка действий
    const actions = document.createElement('div');
    actions.className = 'ticket-actions';
    actions.innerHTML = `
        <div class="action-btn edit-btn">✎</div>
        <div class="action-btn delete-btn">✖</div>
    `;

    // Сборка элементов
    ticketEl.append(status, content, date, ...actions.children);

    return ticketEl;
  }
}
