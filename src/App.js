import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const num = useSelector(state => state.num);
  const dispatch = useDispatch();

  const countTenNum = () => {
    dispatch({type: "INCREMENT-TEN", payload: 10})
  }
  const countNum = () => {
    dispatch({type: "INCREMENT"})
  }
  const decreaseNum = () => {
    dispatch({type: "DECREMENT", payload: 5})
  }

  return (
    <div className='container'>
      <div className='num'>{num}</div>
      <div className='count-btn-wrap'>
        <button className='count-btn' onClick={countTenNum}>+ 10</button>
        <button className='count-btn' onClick={countNum}>+ 1</button>
        <button className='count-btn' onClick={decreaseNum}>- 5</button>
      </div>
      <Box/>
    </div>
  );
}

export default App;
