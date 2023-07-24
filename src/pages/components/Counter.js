import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectValue } from '../store/counterSlice'
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(selectValue)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
