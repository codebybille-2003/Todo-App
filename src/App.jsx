

import "./global.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  let [state, setState] = useState({
    items: [],
    item: "",
    price: "",
    id: uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };  

  let handleSubmit = (e)=>{
    e.preventDefault() 
    let newItem = {
      id : state.id , 
      item : state.item , 
      price : state.price
    } 
 let finalItems = [...state.items ,newItem] 
    setState({
      items : finalItems , 
      id : uuidv4(), 
      item : "",
      price: ""
    })
  } 

// console.log(state);

let handledelete=(x)=>{
let filterdata=state.items.filter((value)=>value.id != x)
setState({...state,items:filterdata})

}

let handleupdate=(y)=>{
  let restitems=state.items.filter((value)=>value.id != y)
  let datatoedit=state.items.find((value)=>value.id==y)
setState({...state,
  items:restitems,
item:datatoedit.item,
price:datatoedit.price})

}
  return (
    <>
      <article>
        <h1>ToDoList</h1>
        <main>
          <Form
            item={state.item}
            price={state.price}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={state.items} handledelete={handledelete} handleupdate={handleupdate}/>
        </main>
      </article>
    </>
  );
};

export default App;
