///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0,
  pick: {
    quantity: 0,
    multiplier: 1,
    price: 10
  },
  grater: {
    quantity: 30,
    multiplier: 3,
    price: 50
  }
};

class Store {
  get State() {
    return _state;
  }
}
const STORE = new Store();

export default STO;
