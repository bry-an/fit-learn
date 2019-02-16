import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
import state from "./state"
import { getters} from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import { RootState } from "./types"

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store<RootState>(store)
