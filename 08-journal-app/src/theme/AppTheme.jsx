// theme.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import { purpleTheme } from './purpleTheme';


const AppTheme = ({ children }) => {
    return (
        /*/// ThemeProvider esto lo que hace es proveer un tema, siempre que se tenga la palabra  */
        <ThemeProvider theme={purpleTheme}>
            {/*//- esto lo que hace es darnos un punto de entrada de estilos es algo parecido a lo que es el normalize.css para ayudarnos que en cualquier navegador la app lasca parecida */}
            <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
    );
};

export default AppTheme;
