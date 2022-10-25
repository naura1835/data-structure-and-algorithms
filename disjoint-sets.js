//this implementation has a quick find which is theta(1) but the connect is still theta(n)-not good enough
class DisjointSets {
  constructor() {
    this.id = [];
  }

  isConnected(x, y) {
    return this.id[x] == this.id[y];
  }
  connect(x, y) {
    let xId = this.id[x];
    let yId = this.id[y];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == xId) this.id[i] = yId;
    }
  }
}
