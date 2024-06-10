import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({ value }) => {

    /// Cando cambia el estado el componente de vuelva a ejecutar, hay hooks especializados para controlar eso
    //- Cuidado por que podemos disparas acciones secundarias te imaginas estar consultado en la DB a cada rato innecesaria mente
    console.log('se disparo el render de esto')


    const [counter, setCounter] = useState(value); 
    
    const handleApp = () => {
        setCounter(counter + 1);
    };

    /// Funciones de la tarea
    const handleSubtract = () => {
        setCounter((c) => c - 1); 
    };

    const handleReset = () => {
        setCounter((c) => value);
    };


    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleApp}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}> Reset </button>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};