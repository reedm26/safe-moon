///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0,
  pick: {
    quantity: 0,
    multiplier: 1,
    price: 10
  }
};

class Store {
  get State() {
    return _state;
  }
}
const STORE = new Store();

export default STORE;
