const { v4: uuid4 } = require("uuid");

class Ticket {
  constructor(numero) {
    this.id = uuid4();
    this.numero = numero;
    this.escritorio = null;
    this.agente = null;
  }
}

module.exports = Ticket;