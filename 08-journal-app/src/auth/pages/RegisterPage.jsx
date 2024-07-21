import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
      /*/// Usando el layout el contenido es el Form  */
      <AuthLayout title='Crear cuenta'>
          <form action=''>
              <Grid container>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                      <TextField
                          label='Nombre completo'
                          type='text'
                          placeholder='Nombre completo'
                          /* Todo el ancho posible  */
                          fullWidth
                      />
                  </Grid>
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
                      <Grid item xs={12}>
                          <Button variant='contained' fullWidth>
                              Login
                          </Button>
                      </Grid>
                  </Grid>

                  {/*/// Grid con dirección de ROW  */}
                  <Grid container direction='row' justifyContent='end'>

                    <Typography sx={{mr: 1}}> ¿Ya tienes cuenta?</Typography>
                      <Link
                          component={RouterLink}
                          color='inherit'
                          to='/auth/login'
                      >
                          Iniciar sesión
                      </Link>
                  </Grid>
              </Grid>
          </form>
      </AuthLayout>
  );
}
