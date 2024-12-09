import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import ArticleReducer from "./ArticleReducer";


const rootReducer = combineReducers({
    userState : userReducer,
    articleStata : ArticleReducer
})

export default rootReducer