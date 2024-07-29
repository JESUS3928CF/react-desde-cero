
import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';

import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';
import { useMemo } from 'react';

const LoginPage = () => {

    /// 1.1 Seleccionar el estado
    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'jesus@google.com',
        password: '123456'
    });

    /// 1.2 Asi lo memorizo si el status cambia se va a volver a obtener otro valor 
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password })

        dispatch( checkingAuthentication() );
    }

    const onGoogleSingIn = () => {
        console.log('onGoogleSingIn');

        dispatch(startGoogleSingIn());
    }

    return (
        <AuthLayout title='Login'>
            <form action='' onSubmit={onSubmit}>
                {' '}
                {/*//!  */}
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='correo@google.com'
                            fullWidth
                            name='email'
                            onChange={onInputChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            onChange={onInputChange}
                            value={password}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            {/*/// 1.3 Usar el status para deshabilitar*/}
                            <Button
                                disabled={isAuthenticating}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                {' '}
                                {/*//!  */}
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant='contained'
                                fullWidth
                                onClick={onGoogleSingIn}
                            >
                                {' '}
                                {/*//!  */}
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
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
