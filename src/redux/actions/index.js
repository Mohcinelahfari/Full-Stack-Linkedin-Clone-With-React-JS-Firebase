import {auth, provider} from "../../../firebase"
import {signInWithPopup, signInWithRedirect} from "firebase/auth"
import * as actions from "../actions/actions" 
export const signInApi = () => {
    return (dispatch) => {
        signInWithRedirect(auth,provider).then((payload) => {
            dispatch(actions.setUser(payload.user))
        }).catch((error) => {
            alert(error.message)
        })
    }
}