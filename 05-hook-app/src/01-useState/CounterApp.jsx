import { useState } from 'react';

const CounterApp = () => {
    // State Podemos poder cualquier tipo de dato, cuidado cuando es por ejemplo un objeto por que si tu lo mutas por un string por ejemplo ya no puedes desestructurar este estado
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    /*// De esta forma podremos desestructurar el estado y solo cambiar la  o las propiedades que queremos   */
    const { counter1, counter2, counter3 } = state
    return (
        <>
            <h1>Counter1: {counter1}</h1>{' '}
            <h1>Counter2: {counter2}</h1>{' '}
            <h1>Counter3: {counter3}</h1>{' '}
            {/* Asi usamos el valor de ese counter */}
            <hr />
            <button
                className='btn'
                /* Asignar estado */
                onClick={() => setCounter({...state,
                    counter1 : counter1 + 1
                })}
            >
                +1
            </button>
        </>
    );
};

export default CounterApp;
