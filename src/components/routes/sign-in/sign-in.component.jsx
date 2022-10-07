import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";


const SignIn = ()=>{
    //this part is quite different than the course as it was showing an error
    useEffect(()=> {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    },[]);

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    };

    const logGoogleRedirectUser = async ()=>{
        const {user} = await signInWithGoogleRedirect();
        console.log(user);

    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup
            </button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect
            </button>
        </div>
    );
};

export default SignIn;