import * as actions from "./actionType"

export const setUser = (payload) => {
    return {
        type : actions.SET_USER,
        user : payload
    }
}


export const setLoading = (status) => {
    return {
        type : actions.SET_LOADING,
        status : status
    }
}

export const getArticle = (payload) => {
    return {
        type: actions.GET_ARTICLE,
        payload : payload
    }
}
