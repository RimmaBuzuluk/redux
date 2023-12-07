import { useDispatch, useSelector } from "react-redux"
import "../style/Button.css"
import { addCashAction, getCashAction } from "../store/cashReduser"

export function Button() {
    const dispatch=useDispatch()
    const cash = useSelector(state=>state.customers.customers)
    // console.log(cash)

    const addCash=(cash)=>{
        dispatch(addCashAction(cash))
    }

    const getCash=(cash)=>{
        dispatch(getCashAction(cash))
    }
  return (

    <div className="Button">
        <button onClick={()=>addCash(Number(prompt()))}>+</button>
        <button onClick={()=>getCash(Number(prompt()))}>-</button>
    </div>
  )
}