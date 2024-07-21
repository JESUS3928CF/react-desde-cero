import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';

import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

const LoginPage = () => {
    return (
        /*/// Usando el layout el contenido es el Form  */
        <AuthLayout title='Login'>
            <form action=''>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='correo@google.com'
                            /* Todo el ancho posible  */
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            /* Todo el ancho posible  */
                            fullWidth
                        />
                    </Grid>

                    {/*//- Agregando botones  */}
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                                {/*//- Agregando iconos  */}
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    {/*/// Grid con dirección de ROW  */}
                    <Grid container direction='row' justifyContent='end'>
                        {/*//- Ese link de de MUI y es solo estilo con el component usas tu sistema de rutas que estas usando  */}
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/register'
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;
