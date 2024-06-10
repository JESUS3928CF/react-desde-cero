
//- Si trabajas con vite tienes que instalarlo con cra no 
import PropTypes from 'prop-types'

//* Hay una forma de definir los valores por defecto muy parecido a como definimos los props
export const FirstApp = ({ title, numero }) => {
    return (
        <>
            <h1> {title} </h1>
            <p> {numero}</p>
        </>
    );
};

/// Configuraciones de nuestro componente
//- definir los valores por defecto, aquí hay un erro en el numero


FirstApp.defaultProps = {
  title : "No hay titulo",
}

FirstApp.propTypes = {
  title : PropTypes.string,
  numero : PropTypes.number.isRequired
}