import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        // Llamamos nuestra función personalizada para autenticar o mostrar un error
        const result = await singInWithGoogle();

        // Si sucede un error lo voy a tener en el slice
        if (!result.ok) return dispatch(logout(result.errorMessage));

        // Si todo dale bien
        dispatch(login(result));
    };
};

/// Thunk para empezar la creación de un usuario
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async ( dispatch ) => {

        // ponemos la app en modo checking
        dispatch( checkingCredentials() );

        //- Llamamos la tarea para crear el usuario
        const {ok, uid, photoURL, errorMessage} =  await registerUserWithEmailPassword({ email, password, displayName });

        if( !ok ) return dispatch( logout({errorMessage}))

        //- Cuando creamos el usuario de una lo logueamos
        dispatch( login({ uid, displayName, email, photoURL}));
    }
}