const TicketList = require("./ticket-list");
class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvents(); 
  }
  socketEvents() {
    this.io.on('connection', (socket) => { 
      console.log("Cliente connectado");
      socket.on("solicitar-ticket", (_, cb) => {
        const nuevoTicket = this.ticketList.crearTicket();
        cb(nuevoTicket)
      })
      socket.on("siguiente-ticket-trabajar", ({agente, escritorio}, cb) => {
        const nuevoTicket = this.ticketList.asignarTicket(agente, escritorio);
        cb(nuevoTicket);
        this.io.emit("ticket-asignado", this.ticketList.ultimos13);
      })
    });
  }
}

module.exports = Sockets;