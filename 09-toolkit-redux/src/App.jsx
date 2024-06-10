import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch  } from 'react-redux'
import { increment, reset } from './store/slices/counter';

function App() {

  /// Llamar o usar información de nuestro store
  const { counter } = useSelector((state) => state.counter);

  /// Asi llamamos a los métodos
  const dispatch = useDispatch();

  return (
      <>
          <div>
              <a href='https://vitejs.dev' target='_blank'>
                  <img src={viteLogo} className='logo' alt='Vite logo' />
              </a>
              <a href='https://react.dev' target='_blank'>
                  <img
                      src={reactLogo}
                      className='logo react'
                      alt='React logo'
                  />
              </a>
          </div>
          <h1>count is: {counter}</h1>
          <div className='card'>
              {/*/// Utilizando nuestra acción y nuestro estado  */}
              <button onClick={() => dispatch(increment(1))}>Increment</button>
              <button onClick={() => dispatch(increment(-1))}>Decrement</button>
              <button onClick={() => dispatch(increment(2))}>
                  Increment by 2
              </button>
              <button onClick={() => dispatch( reset())}>
                  reset
              </button>
          </div>
          <p className='read-the-docs'>
              Click on the Vite and React logos to learn more
          </p>
      </>
  );
}

export default App
