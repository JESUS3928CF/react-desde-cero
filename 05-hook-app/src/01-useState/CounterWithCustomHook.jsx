import { useCounter } from "../hook/useCounter";

const CounterWithCustomHook = () => {
    /*/// Consumimos nuestras funciones y datos */
    /*//- Lo bueno de esto es que mi lógica de negocio no esta aca en el componente si no en le hook  */
    const { counter, increment, decrement, reset } = useCounter(0)
  return (
      <>
          <h1> Counter with Hook : {counter} </h1>

          <div className='container-rows'>
              {/*/// Si la función recibe parámetro hay que úsala de esta forma en los eventos, para no enviarle el even como parámetro  */}
              <button className='btn btn-primary' onClick={() => increment(2)}>
                  +1
              </button>
              <button className='btn btn-primary' onClick={reset}>
                  Reset
              </button>
              <button className='btn btn-primary' onClick={() => decrement(2)}>
                  -1
              </button>
          </div>
      </>
  );
}

export default CounterWithCustomHook
