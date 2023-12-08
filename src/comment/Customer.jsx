import { useDispatch, useSelector } from "react-redux";
import "../style/Customer.css"
import { addCustomerAction, removeCustomerAction } from "../store/customersReduser";
import { fetchCustomers } from "../asyncActions/customers";

export function Customer() {
    
    const dispatch=useDispatch()
    const customer=useSelector(state=>state.customers.customers)
    console.log(customer)
   

    const addCustomer = () => {
      const name = prompt("Enter customer name"); // Виклик prompt() для отримання імені від користувача
      if (name !== null && name !== "") { // Перевірка, чи введене значення не є null або пустим рядком
        const newCustomer = {
          name,
          id: Date.now(),
        };
        dispatch(addCustomerAction(newCustomer));
      } else {
        // Якщо значення є null або пустим рядком, не викликати addCustomerAction
        alert("Invalid customer name"); // Можна додати сповіщення користувачу про недійсне ім'я
      }
    };
    

    const removeCustomer=(customer)=>{
        dispatch(removeCustomerAction(customer.id))
    }
  
  return (
    <div className="Customer">
      <div>Customers</div>
      <div className="customersButton">
        <button onClick={()=>addCustomer()}>add customer</button>
        <button onClick={()=>dispatch(fetchCustomers())}>get users from server</button>
      </div>
    {customer.length>0? 
    <div>
        {customer.map(customer=>
            <div onClick={()=>removeCustomer(customer)} key={customer.id}>{customer.name}</div>)}
    </div>
    :
    <div>we dont have</div>}

    </div>
  );
}

