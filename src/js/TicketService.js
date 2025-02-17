/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */

import createRequest from './api/createRequest';
import Ticket from './Ticket';

export default class TicketService {
  static async getAllTickets() {
    try {
      const response = await createRequest({ method: 'allTickets' });
      return response || [];
    } catch (error) {
      console.error('Ошибка при получении всех тикетов:', error.message);
      throw error;
    }
  }

  static async getTicketById(id) {
    // return createRequest({ method: 'ticketById', id });
    try {
      const response = await createRequest({ method: 'ticketById', id });
      return response;
    } catch (error) {
      console.error('Ошибка при получении тикета по ID:', error.message);
      throw error;
    }
  }

  static async createTicket(data) {
    return createRequest({ method: 'createTicket', data });
  }

  static async updateTicket(id, data) {
    // return createRequest({ method: 'updateById', id, data });
    try {
      const response = await createRequest({
        method: 'updateById',
        id,
        data,
      });
      return response;
    } catch (error) {
      console.error('Ошибка при обновлении тикета:', error.message);
      throw error;
    }
  }

  static async deleteTicket(id) {
    // return createRequest({ method: 'deleteById', id });
    try {
      const response = await createRequest({ method: 'deleteById', id });
      return response;
    } catch (error) {
      console.error('Ошибка при удалении тикета:', error.message);
      throw error;
    }
  }
}
