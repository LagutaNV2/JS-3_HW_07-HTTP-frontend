import HelpDesk from './HelpDesk';
import TicketForm from './TicketForm';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Создаём контейнер для кнопки и списка тикетов
  const container = document.createElement('div');
  container.innerHTML = `
    <button id="add-ticket" class="btn add-btn">Добавить тикет</button>
    <div id="tickets"></div>
  `;
  root.appendChild(container);

  // Запускаем HelpDesk внутри #tickets
  window.helpDesk = new HelpDesk(document.getElementById('tickets'));

  document.getElementById('add-ticket').addEventListener('click', () => {
    TicketForm.showForm();
  });
});
