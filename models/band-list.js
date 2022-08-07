const Band = require("./band");

class BandList{
  constructor() {
    this.bands = [
      new Band("Metallica 1"),
      new Band("Metallica 2"),
      new Band("Metallica 3"),
      new Band("Metallica 4"),
      new Band("Metallica 5"),
    ]
  }
  addband(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands; 
  }
  removeband(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }
  getBands() {
    return this.bands; 
  }
  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.votes += 1;
      return band;
    })
  }
  changeName(id, name) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.name = name;
      return band;
    })
  }
}
module.exports = BandList;