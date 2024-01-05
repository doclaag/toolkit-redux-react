import { useSelector, useDispatch } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { increment, decrement, incrementByValue } from './store/slices/counter'

const App = () => {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>count is: {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByValue(2))}>
          Increment by 2
        </button>
      </div>
    </>
  );
};

export default App
