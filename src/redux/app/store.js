import { createStore } from "redux";
import userReducer from "../Reducer/UserReducer";
import rootReducer from "../Reducer";


 const store = createStore(rootReducer)
 export default store;