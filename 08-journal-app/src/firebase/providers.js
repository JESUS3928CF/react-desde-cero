import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

/// Creamos la instancia de esta función
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {

        /// aca es el método que es un popup y el proveedor que es como quiero que aparezca el popup
        const result = await signInWithPopup(FireBaseAuth, googleProvider)

        const credentials = GoogleAuthProvider.credentialFromResult( result );
        console.log({ credentials }); 
    } catch (error) {
        console.log(error)
    }
}