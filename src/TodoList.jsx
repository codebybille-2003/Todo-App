

import { Fragment } from "react";

const TodoList = (props) => {
  console.log(props);
  let {items,handledelete,handleupdate} = props 

  return (
    <section className="todo"> 
    <h2>ORDERS</h2> 
    <table>
      <thead>
        <tr>
          <th>ITEM</th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          items.length > 0 && items.map((value)=>{
            return (
              <Fragment key={value.id}>
                  <tr>
                     <td>{value.item}</td>
                     <td>{value.price}</td>
                     <td>
                      <button  onClick={()=>handleupdate(value.id)}>Edit</button>
                      <button onClick={()=>handledelete(value.id)}>Delete</button>
                     </td>
                  </tr>
              </Fragment>
            )
          })
        }
      </tbody>
    </table>
    </section>
  )
}

export default TodoList