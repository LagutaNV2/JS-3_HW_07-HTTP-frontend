export default class DeleteModal {
  constructor(onConfirm) {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.innerHTML = `
            <div class="modal-content">
                <p>Вы уверены, что хотите удалить тикет?</p>
                <button class="confirm">ОК</button>
                <button class="cancel">Отмена</button>
            </div>
        `;

    this.modal.querySelector('.confirm').addEventListener('click', () => {
      onConfirm();
      this.close();
    });

    this.modal.querySelector('.cancel').addEventListener('click', () => this.close());

    document.body.appendChild(this.modal);
  }

  close() {
    this.modal.remove();
  }
}
