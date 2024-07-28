import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = ( email, password) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());

    }
}

export const startGoogleSingIn = () => {

    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        /// Llamamos nuestra función personalizada
        singInWithGoogle()
    }
}
