import { useMemo, useState } from 'react';
import { useCounter } from '../hook/useCounter';

/*/// Función pesada  */
const heavyStuff = ( iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        // Simulate heavy computation
        console.log('Hay vamos')
    }

    return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(2000);
    const [show, setShow] = useState(true);

    ///1) El useMemo recibe una función que retorna un valor y las dependencias de cuando cambiara, si le pasas un array [] solo se ejecutara la primera ves
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>
                {' '}
                Counter: <small> {counter} </small>
            </h1>
            <hr />

            {/*///2) De esta forma solo de dispara el proceso la primera ves y cuando cambie la dependencia   */}
            <h4>{memorizedValue}</h4>

            <div className='container-rows'>
                <button className='btn btn-primary' onClick={() => increment()}>
                    +1
                </button>

                <button
                    className='btn btn-outline-primary'
                    onClick={() => setShow(!show)}
                >
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </>
    );
};
