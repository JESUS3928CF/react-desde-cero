import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* NavBar  */}
            <NavBar drawerWidth={drawerWidth} />

            {/*///A Sidebar drawerWidth*/}
            <SideBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    pl: 10,
                    width: '100%',
                    overflow: 'auto',
                }}
            >
                {/* Toolbar */}
                {/*/// esto nos ayuda a que el contenido se ubique en el espacio disponible conde no esta le menu ni el header  */}
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
};

JournalLayout.propTypes = {
    children: PropTypes.node,
};
