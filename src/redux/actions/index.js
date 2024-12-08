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

export const getAuthUser = () => {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(actions.setUser(user))
            }
        })
    }
}


 export const signOutAPI = () => {
    return (dispatch) => {
        auth.signOut().then(()=> {
            dispatch(actions.setUser(null))
        }).catch((error) => alert(error.message))
    }
 }