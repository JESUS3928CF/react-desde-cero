///. esas otras carpetas que creamos en la arquitectura no tiene nada aun, solo es un ejemplo de como organizar varios slices 


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 10,
    times: 0 // asi creamos mas información en nuestro slice
};

//* 1... exportamos esto
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        /// la action me dice el nombre y otro montón de cosas pero entre eso viene el payload, puede ser un objeto un bool lo que sea 
        increment: (state, action) => {

            console.log(action);

            if (action.payload >= 0) {
                // Permitir incremento
                state.counter += action.payload;
            } else if (state.counter + action.payload >= 0) {
                // Permitir decremento solo si el resultado no es negativo
                state.counter += action.payload;
            }
        },
        reset: (state) => {
            state.counter = 0;
        },
    },
});


/// Aca tememos nuestras acciones
// Action creators are generated for each case reducer function
export const { increment, reset } = counterSlice.actions; 

//* esta linea la podemos borrar
//export default counterSlice.reducer;
