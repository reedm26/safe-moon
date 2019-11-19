///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0
};

class Store {
  get State() {
    return _state;
  }
}
const STORE = new Store();

export default STORE;
