import { signInWithPopup, signInWithRedirect } from "firebase/auth"
import {auth, provider} from "../../../firebase"
import * as actions from "../actions/actions"
export const SignInApi = () =>{
    return (dispatch) => {
        signInWithPopup(auth, provider).then((payload) => {
            dispatch(actions.setUser(payload.user))
        }).catch((error) => {
            alert(error.message)
        })


    }
}