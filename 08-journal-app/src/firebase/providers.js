import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {

        const result = await signInWithPopup(FireBaseAuth, googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult( result ); asi obtenemos el token de auth

        const { displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        console.log(error);

        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // ...

        return {
            ok: false,
            errorMessage,
        };
    }
}

// Ahora haremos el nuevo proveedor para registrarnos ocn un usuario y password
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        
        // Esta función solo recibe esos 3 parámetros  
        const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password);

        const {uid, photoURL} = resp.user;

        //-1 Actualizar el displayName en Firebase, en ese objeto nos muestra las pocas cosas que podemos actualizar
        await updateProfile( FireBaseAuth.currentUser, { displayName : displayName} );
        return {
            ok: true,
            uid,
            photoURL,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage : error.message,
        };
    }
}