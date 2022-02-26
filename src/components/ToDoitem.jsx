import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id); //here we are passing the id of the element we clicked to the deleteitem function.
      }}
    >
      <li>
        {/* {props.id} {props.text} */}
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
