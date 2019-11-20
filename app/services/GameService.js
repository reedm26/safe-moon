import store from "../store.js";
function _calcUpgrades() {
  store.State.count -= store.State.pick.price;
  store.State.pick.quantity += 1;
  store.State.pick.multiplier *= 2;
  store.State.pick.price *= 20;
}
class GameService {
  updateCount() {
    console.log("DID WE GET HERE?");
    // throw new Error("YOU SHALL NOT PASS")
    store.State.count += 1; //TODO: ADD MODS
    store.State.count +=
      store.State.pick.quantity * store.State.pick.multiplier;

    console.log("DID WE GET HERE?");
    store.State.grater.quantity * store.State.grater.multiplier;
  }
  pickUpdate() {
    if (store.State.count < store.State.pick.price) {
      return;
    }
    _calcUpgrades();
  }
  graterUpdate() {
    if (store.State.count < store.State.grater.price) {
      return;
    }
    _calcUpgrades();
  }
}
const GAMESERVICE = new GameService();

export default GAMESERVICE;
