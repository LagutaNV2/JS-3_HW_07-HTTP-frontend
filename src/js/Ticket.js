// export default class Ticket {
//   constructor({ id, name, description, status, created }) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.status = status;
//     this.created = new Date(created).toLocaleString();
//   }
// }

export default class Ticket {
  constructor({ id, name, status, created }) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.created = new Date(created).toLocaleString();
  }
}
