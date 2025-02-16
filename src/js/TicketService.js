/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */

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
