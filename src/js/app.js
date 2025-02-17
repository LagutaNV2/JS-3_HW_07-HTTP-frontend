import HelpDesk from './HelpDesk';
import TicketForm from './TicketForm';
import TicketService from './TicketService';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const ticketService = new TicketService(); // Создаем экземпляр сервиса
  const helpdesk = new HelpDesk(root, ticketService); // Передаем сервис в HelpDesk

 

  // Создаём контейнер для кнопки и списка тикетов
  const container = document.createElement('div');
  container.innerHTML = `
    <button id="add-ticket" class="btn add-btn">Добавить тикет</button>
    <div id="tickets"></div>
  `;
  root.appendChild(container);

  window.helpDesk = new HelpDesk(document.getElementById('tickets'));

  document.getElementById('add-ticket').addEventListener('click', () => {
    TicketForm.showForm();
  });
});
