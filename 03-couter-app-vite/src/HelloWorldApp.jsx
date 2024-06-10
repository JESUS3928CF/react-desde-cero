
/// Deferir nuestro componente, lo exportamos solo una exportación en un solo archivo
export function HelloWorldApp() {
    return <h1>Hola mundo</h1>;
}

//- como es una solo esta retornado algo se podría hacer asi, aunque no hagas eso de esa forma
export const ArrayFunction = () => <h1>ArrayFunction</h1>;

/// de esta forma lo exportamos por defecto
//* export default App

/// rafc asi rápidamente creamos ese mismo componente