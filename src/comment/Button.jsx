import { useDispatch, useSelector } from "react-redux"
import "../style/Button.css"

export function Button() {
    const dispatch=useDispatch()
    const cash = useSelector(state=>state.cash)
    console.log(cash)

    const addCash=()=>{
        dispatch({type:"ADD_CASH", payload:5})
    }

    const getCash=()=>{
        dispatch({type:"GET_CASH", payload:5})
    }
  return (

    <div className="Button">
        <button onClick={()=>addCash()}>+</button>
        <button onClick={()=>getCash()}>-</button>
    </div>
  )
}