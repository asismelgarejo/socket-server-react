const BandList = require("./band-list");
class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents(); 
  }
  socketEvents() {
    this.io.on('connection', (socket) => { 
      socket.emit("current-band", this.bandList.getBands());
      socket.on("votar-banda", ({ id }) => { 
        this.bandList.increaseVotes(id);
        this.io.emit("current-band", this.bandList.getBands());
      })
      socket.on("borrar-banda", ({ id }) => { 
        this.bandList.removeband(id);
        this.io.emit("current-band", this.bandList.getBands());
      })
      socket.on("cambiar-nombre-banda", ({ id, name }) => { 
        console.log("cambiar-nombre-banda", id, name);
        this.bandList.changeName(id, name);
        this.io.emit("current-band", this.bandList.getBands());
      })
      socket.on("crear-banda", ({ nombre }) => { 
        this.bandList.addband(nombre);
        this.io.emit("current-band", this.bandList.getBands());
      })
    });
  }
}

module.exports = Sockets;