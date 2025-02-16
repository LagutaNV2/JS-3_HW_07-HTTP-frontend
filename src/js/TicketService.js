/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */

// export default class TicketService {
//   constructor() {
//     this.API_BASE = 'http://localhost:7070';
//   }

//   list(callback) {
//     fetch(`${this.API_BASE}/?method=allTickets`)
//       .then((response) => response.json())
//       .then((data) => callback(data));
//   }

//   get(id, callback) {
//     fetch(`${this.API_BASE}/?method=ticketById&id=${id}`)
//       .then((response) => response.json())
//       .then((data) => callback(data));
//   }

//   create(data, callback) {
//     fetch(`${this.API_BASE}/?method=createTicket`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//     }).then((response) => callback(response));
//   }

//   update(id, data, callback) {
//     fetch(`${this.API_BASE}/?method=updateById&id=${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(data),
//     }).then((response) => callback(response));
//   }

//   delete(id, callback) {
//     fetch(`${this.API_BASE}/?method=deleteById&id=${id}`, {
//       method: 'DELETE',
//     }).then((response) => callback(response));
//   }
// }

import createRequest from './api/createRequest';
import Ticket from './Ticket';

export default class TicketService {
  static async getAllTickets() {
    const tickets = await createRequest({ method: 'allTickets' });
    return tickets.map((ticket) => new Ticket(ticket));
  }

  static async getTicketById(id) {
    return createRequest({ method: 'ticketById', id });
  }

  static async createTicket(data) {
    return createRequest({ method: 'createTicket', data });
  }

  static async updateTicket(id, data) {
    return createRequest({ method: 'updateById', id, data });
  }

  static async deleteTicket(id) {
    return createRequest({ method: 'deleteById', id });
  }
}
