import { useEffect, useState } from 'react';

const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        //- Cuando ejecutamos este listener y luego desmontamos el componente el listener quedara activo es decir que el codigo que imprime las condenadas del mouse se seguirá ejecutando indefinidamente y eso no es todo cuando volvemos a montar el componente este instanciará otro listener asi que se duplicara los console y si multiplicándose
        /*         window.addEventListener('mousemove', (event) => {
            console.log(event.x, event.y);
            //console.log(':)');
        }) */


        /// Para solucionar eso instanciamos el listener con una función
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };
        
        /// Ahora solo tendremos un listener y solo cuando el componente exista, ahora si estuviéramos en una versión menor a la 18 de react al ejecutar este doce u no desmotar la instancia nos daría error po intentar modificar estados de un componente que no existe 
        window.addEventListener('mousemove', onMouseMove);

        //- Cuando el componente se desmonta, se ejecuta este return, osea cuando lo destruimos desde el componente que lo usa
        return () => {

            //- Eliminamos el listener para que no siga generando console y que no consuma recursos
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            <p>{JSON.stringify(coords)} </p>
        </>
    );
};

export default Message;
