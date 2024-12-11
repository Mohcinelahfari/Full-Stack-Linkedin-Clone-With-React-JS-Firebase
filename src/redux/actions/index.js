import { signInWithPopup } from "firebase/auth";
import { auth, provider, storage } from "../../../firebase";
import * as actions from "../actions/actions";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";  // Added missing imports

export const SignInApi = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                dispatch(actions.setUser(payload.user));
            })
            .catch((error) => {
                alert(error.message);
            });
    };
};

export const getAuthUser = () => {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(actions.setUser(user));
            }
        });
    };
};

export const signOutAPI = () => {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(actions.setUser(null));
            })
            .catch((error) => alert(error.message));
    };
};

export const postarticlApi = (payload) => {
    return (dispatch) => {
        dispatch(actions.setLoading(true));

        if (payload.image) {
            const storageRef = ref(storage, `images/${payload.image.name}`);
            const uploadRef = uploadBytesResumable(storageRef, payload.image);
            uploadRef.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
              },
              (error) => {
                alert(error);
              },
              () => {
                getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
                  const collRef = collection(db, "articles");
                  addDoc(collRef, {
                    actor: {
                      description: payload.user.email,
                      title: payload.user.displayName,
                      date: payload.timestamp,
                      image: payload.user.photoURL,
                    },
                    comments: 0,
                    video: payload.video,
                    description: payload.description,
                    shareImg: downloadURl,
                  });
                });
                dispatch(actions.setLoading(false));
              }
            );
          } else {
            // If no image is provided, simply add the article data without image
            const collRef = collection(db, "articles");
            addDoc(collRef, {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                comments: 0,
                video: payload.video,
                description: payload.description,
                shareImg: "",
            })
            .then(() => {
                dispatch(actions.setLoading(false)); // Stop loading after doc is added
            })
            .catch((error) => {
                alert(error.message);
                dispatch(actions.setLoading(false)); // Stop loading in case of error adding document
            });
        }
    };
};
