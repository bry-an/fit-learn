import { MutationTree } from "vuex"
import { userProfile } from "./types"

export const mutations: MutationTree<userProfile> = {
  setUserWeight(state, payload: userProfile) {
    state.weight = payload.weight
  }
}
export default {}
