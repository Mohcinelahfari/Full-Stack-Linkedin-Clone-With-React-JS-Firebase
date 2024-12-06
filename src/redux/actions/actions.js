import * as actions from "./actionType"

export const setUser = (payload) => {
    return {
        type : actions.SET_USER,
        user : payload.user
    }
}