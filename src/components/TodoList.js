// import React from "react";

// const TodoList = ({ todo, dispatch }) => {
//   return (
//     <div style={{ border: "1px solid black ", width: "40%", margin: "auto",  backgroundColor : "darkgreen" }}>
//       <p>{todo.inputValue}</p>
//       <button
//         onClick={() =>
//           dispatch({ type: "mark_Todo", payload: { id: todo.id } })
//         }
//       >
//         {todo.completed ? "completed" : "incomplete"}
//       </button>
//       <button>Delete</button>
//     </div>
//   );
// };

// export default TodoList;
import React from "react";
import "./table.css";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <table className="customers">
        <tr>
          <td style={{ border: "2px solid black" }}>
            <input
              type="checkbox"
              id="checkBox1"
              checked={todo.check ? "" : "checked"}
            ></input>
          </td>
          <td style={{ border: "2px solid black" }}>
            <span style={{ color: todo.color ? "red" : "green" }}>
              {" "}
              {todo.inputValue}{" "}
            </span>
          </td>
          <td style={{ border: "2px solid black" }}>
            <button
              onClick={() =>
                dispatch({ type: "mark_Todo", payload: { id: todo.id } })
              }
            >
            
            </button>
          </td>
          <td style={{ border: "2px solid black" }}>
            <button
              onClick={() =>
                dispatch({ type: "mark_UnTodo", payload: { id: todo.id } })
              }
            >
          
            </button>
          </td>
          <td style={{ border: "2px solid black" }}>
            <button
              onClick={() =>
                dispatch({ type: "Delete_Todo", payload: { id: todo.id } })
              }
            >
              Delete
            </button>
          </td>
          cd
        </tr>
      </table>
    </div>
  );
};

export default TodoList;
