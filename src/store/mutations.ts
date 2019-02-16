import { MutationTree } from "vuex"
import { UserProfile } from "./types"

export const mutations: MutationTree<userProfile> = {
  setUserWeight(state, payload: UserProfile) {
    state.weight = payload.weight
  }
}
export default {}
