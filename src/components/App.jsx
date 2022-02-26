import React, { useState } from "react";

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
          {/* <li>A Item </li> */}
          {itemlist.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
