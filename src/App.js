
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button } from './comment/Button';

function App() {
  const dispatch=useDispatch()
  const cash=useSelector(state=>state.cash)
  return (
    <div className="App">
      <div>{cash}</div>
        <Button/>
    </div>
  );
}

export default App;