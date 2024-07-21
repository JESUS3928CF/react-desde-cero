import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

/*/// Aca estamos creando un objeto que tiene la definición de nuestro tema  */
export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254', // Este es el color principal de la aplicación
        },
        secondary: {
            main: '#543884', // Este es el color secundario de la aplicación
        },
        error: {
            main: red.A400, // Este es el color que se usará para los mensajes de error
        },
    },
});
