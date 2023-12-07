
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button } from './comment/Button';
import { Customer } from './comment/Customer';

function App() {
  
  const dispatch=useDispatch()
  const cash=useSelector(state=>state.cash.cash)
  return (
    
    <div className="App">
      
      <div>{cash}</div>
        <Button/>
        <Customer/>
    </div>
  );
}

export default App;