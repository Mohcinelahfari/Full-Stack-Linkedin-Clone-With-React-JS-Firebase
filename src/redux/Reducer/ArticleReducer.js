import * as actions from "../actions/actionType"

const initialState = {
    loading : false,
    article : []
}

function ArticleReducer(state = initialState, action) {
  switch(action.type){
    case actions.SET_LOADING : 
        return{
            ...state,
            loading : action.status
        }
    case actions.GET_ARTICLE :
        return {
            ...state,
            article : action.payload
        }
    default :
        return state
  }
}

export default ArticleReducer