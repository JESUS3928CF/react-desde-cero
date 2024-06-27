import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const initialRows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    // Puedes agregar más filas aquí
];

export default function BasicTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filter, setFilter] = useState('');
    const [rows, setRows] = useState(initialRows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleEdit = (row) => {
        // Aquí podrías agregar la lógica para editar la fila.
        console.log('Editar', row);
    };

    const handleDelete = (name) => {
        setRows(rows.filter((row) => row.name !== name));
    };

    const filteredRows = rows.filter((row) =>
        row.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleAdd = () => {
        const newRow = createData('a', 0, 0, 0, 0);
        setRows([newRow, ...rows]); // Agrega el nuevo elemento al principio
        setFilter(''); // Resetea el filtro
    };

    return (
        <Paper>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: 2,
                }}
            >
                <TextField
                    label='Filtrar'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={handleFilterChange}
                    value={filter}
                />
                <Button variant='contained' color='primary' onClick={handleAdd}>
                    Agregar
                </Button>
            </Box>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Dessert (100g serving)
                            </TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Calories
                            </TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Fat&nbsp;(g)
                            </TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Carbs&nbsp;(g)
                            </TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Protein&nbsp;(g)
                            </TableCell>
                            <TableCell
                                align='right'
                                sx={{
                                    backgroundColor: 'lightblue',
                                    fontWeight: 'bold',
                                }}
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component='th' scope='row'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.calories}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.fat}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.protein}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <IconButton
                                            aria-label='edit'
                                            onClick={() => handleEdit(row)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label='delete'
                                            onClick={() =>
                                                handleDelete(row.name)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component='div'
                count={filteredRows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Paper>
    );
}
