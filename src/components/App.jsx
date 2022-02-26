import React, { useState } from "react";
import ToDoItem from "./ToDoitem";

function App() {
  var [inputname, setinputname] = useState("");
  var [itemlist, setitemlist] = useState([]);

  function handleChange(event) {
    var newvalue = event.target.value;
    setinputname(newvalue);
  }

  function saveitems() {
    setitemlist((previtems) => {
      return [...previtems, inputname];
    });
    setinputname(""); //clearing the input value as soon as button is clicked
  }

  function deleteitem(id) {
    setitemlist((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id; //returning all the items except the id that is selected
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={handleChange} value={inputname} />
        <button onClick={saveitems}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {itemlist.map((todoItem, indexabc) => (
            <ToDoItem
              key={indexabc}
              id={indexabc}
              text={todoItem}
              onChecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
