class Storage {
  #items;
  constructor(parameters) {
    this.#items = parameters;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexItem = this.#items.indexOf(itemToRemove);
    console.log(indexItem);
    if (indexItem > 0) {
      this.#items.splice(indexItem, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems());

// storage.removeItem('Droid');
// console.log(storage.getItems());

// storage.removeItem('Antigravitator');
// console.log(storage.getItems());

// storage.removeItem('Antigravi');
// console.log(storage.getItems());
