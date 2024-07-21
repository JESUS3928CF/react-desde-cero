import { Grid, Typography } from "@mui/material";

const AuthLayout = ({children, title = ''}) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4,
            }}
        >
            <Grid
                item
                className='box-shadow'
                xs={3}
                sx={{
                    /*/// esto es para decirle que en pantallas medias solo ocupe 450 Pixeles  */
                    width: { md: 455 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant='h5' sx={{ mb: 1 }}>
                    {title}
                </Typography>

                {/* /// Aca va el contenido */}
                {children}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;