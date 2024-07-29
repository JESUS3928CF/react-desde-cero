// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

/// FUNCIÓN para obtener la autenticación
import { getAuth } from 'firebase/auth';

/// Esto es para la base de datos, lite por que que no necesito todas las funcionalidades
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//- Your web app's Firebase configuration, ESTO Va en variables de entorno
const firebaseConfig = {
    apiKey: 'AIzaSyDoGTXXuxgvofI_JNJWzkevueh-oYHghHA',
    authDomain: 'react-cursos-c924e.firebaseapp.com',
    projectId: 'react-cursos-c924e',
    storageBucket: 'react-cursos-c924e.appspot.com',
    messagingSenderId: '1080702948122',
    appId: '1:1080702948122:web:285c81f304e127936812a3',
};
//- Estos 3 son los objetos que necesito para interactuar con firebase
/// Initialize Firebase, le cambiamos el nombre y la exportamos por si la llegamos a utilizar en otros lugares
export const FirebaseApp = initializeApp(firebaseConfig);

/// esto es para la autenticación
export const FireBaseAuth = getAuth(FirebaseApp);

/// Ponemos el uso de la base de datos aca
export const FirebaseDB = getFirestore(FirebaseApp);
