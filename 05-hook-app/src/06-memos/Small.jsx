import { memo } from 'react';


/*//- Para un componente como este es mas rápido que no lo memorize, pero esto es solo la implementación    */
const Small = ({ value }) => {
    /*/// Cuando hay en proceso pesado aca es recomendable memorizar esta componente por que cualquier cambio que haya donde este es utilizado este se va a volver a rebujar   */
    console.log('Me volví a dibujar ');
    return <small> {value} </small>;
};

export default memo(Small);
