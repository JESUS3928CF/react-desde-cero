import { TurnedInNot } from '@mui/icons-material';
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';

const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth, flexShrink: { sm: 0 } } }}
        >

            {/*/// Este es el menu esto tiene muchas propiedades que no pueden ayudar  */}
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Jesús cochero
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText
                                        secondary={
                                            'Consectetur nulla reprehenderit duis'
                                        }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;