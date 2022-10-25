class ArrayList {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  addLast(value) {
    this.array[this.size] = value;
    this.size++;
    return this.array;
  }
  getLast() {
    return this.array[this.size - 1];
  }
  get(index) {
    return this.array[index];
  }
  getSize() {
    return this.size;
  }
  removeLast() {
    let lastItem = this.getLast();
    this.size--;
    this.array.length = this.size;
    return lastItem;
  }
}
const AList = new ArrayList();
AList.addLast(1);
AList.addLast(13);
AList.addLast(12);
AList.addLast(29);
AList.addLast(5);

AList.removeLast();
console.log(AList);
