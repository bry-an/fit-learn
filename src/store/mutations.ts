import { MutationTree } from "vuex"
import { UserProfile } from "./types"

export const mutations: MutationTree<UserProfile> = {
  setUserWeight(state, payload: UserProfile) {
    state.weight = payload.weight
  },
  setUserHeight(state, payload: UserProfile) {
    state.height = payload.weight
  },
  setUserSex(state, payload: UserProfile) {
    state.sex = payload.sex
  }
}
export default {}
