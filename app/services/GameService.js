import store from "../store.js";

class GameService {

  updateCount(){
    console.log("DID WE GET HERE?")
    // throw new Error("YOU SHALL NOT PASS")
    store.State.count += 1 //TODO: ADD MODS
    console.log("DID WE GET HERE?")
  }

}

const GAMESERVICE = new GameService()

export default GAMESERVICE
