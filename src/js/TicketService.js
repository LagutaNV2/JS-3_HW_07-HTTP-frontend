/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */

// import createRequest from './api/createRequest';
// import Ticket from './Ticket';

// export default class TicketService {
//   static async getAllTickets() {
//     try {
//       const response = await createRequest({ method: 'allTickets' });
//       return response || [];
//     } catch (error) {
//       console.error('Ошибка при получении всех тикетов:', error.message);
//       throw error;
//     }
//   }

//   static async getTicketById(id) {
//     // return createRequest({ method: 'ticketById', id });
//     try {
//       const response = await createRequest({ method: 'ticketById', id });
//       return response;
//     } catch (error) {
//       console.error('Ошибка при получении тикета по ID:', error.message);
//       throw error;
//     }
//   }

//   static async createTicket(data) {
//     return createRequest({ method: 'createTicket', data });
//   }

//   static async updateTicket(id, data) {
//     // return createRequest({ method: 'updateById', id, data });
//     try {
//       const response = await createRequest({
//         method: 'updateById',
//         id,
//         data,
//       });
//       return response;
//     } catch (error) {
//       console.error('Ошибка при обновлении тикета:', error.message);
//       throw error;
//     }
//   }

//   static async deleteTicket(id) {
//     // return createRequest({ method: 'deleteById', id });
//     try {
//       const response = await createRequest({ method: 'deleteById', id });
//       return response;
//     } catch (error) {
//       console.error('Ошибка при удалении тикета:', error.message);
//       throw error;
//     }
//   }
// }

import createRequest from './api/createRequest';

export default class TicketService {
  constructor() {
    this.API_BASE = 'http://localhost:7070';
  }

  async list() {
    return createRequest({
      method: 'GET',
      url: this.API_BASE,
      params: { method: 'allTickets' }
    });
  }

  async create(data) {
    return createRequest({
      method: 'POST',
      url: this.API_BASE,
      params: { method: 'createTicket' },
      data
    });
  }

  async update(id, data) {
    return createRequest({
      method: 'PATCH',
      url: this.API_BASE,
      params: {
        method: 'updateById',
        id: id
      },
      data: {
        name: data.name,
        description: data.description,
        status: data.status // Добавляем обновление статуса
      }
    });
  }

  async delete(id) {
    return createRequest({
      method: 'DELETE',
      url: this.API_BASE,
      params: {
        method: 'deleteById',
        id: id
      }
    });
  }
}