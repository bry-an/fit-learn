import { GetterTree } from "vuex"
import { UserProfile } from "./types"
import { RootState } from "./types"


export const getters: GetterTree<UserProfile, RootState> = {
    userWeight (state): number {
        const { height } = state
        
        return height ? height : 0
        
    }, 
    userHeight (state): number {
        const { weight } = state

        return weight ? weight : 0
    },
    userSex (state): string {
        const { sex } = state

        return sex ? sex: ""
    }
}