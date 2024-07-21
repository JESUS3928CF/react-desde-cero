import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

const NavBar = ({ drawerWidth = 240}) => {
    return (
        <AppBar
            /*/// fixed es que siempre va a estar en una posición fija */
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    /*/// esto es para que el botón aparezca cuando esta pequeño  */
                    sx={{
                        mr: 2,
                        display: { sm: 'none' },
                    }}
                >
                    <MenuOutlined />
                </IconButton>

                {/*/// contenido del navbar  */}
                <Grid container direction='row' justifyContent='space-between' alignItems="center">
                    <Typography variant='h6' noWrap component='div'>
                        JournalApp
                    </Typography>

                    {/*/// Botón tipo icono que usa el color de nuestro menu  */}
                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
