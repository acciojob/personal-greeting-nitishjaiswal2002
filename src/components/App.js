
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName]=useState("")

  function handleChange(e){
    setName("Hello"+e.target.value+"!");
  }

  return (
<div>
        {/* Do not remove the main div */}
        <label>Enter your name: </label>
        <input type="name" placeholder="name"onChange={handleChange}/>
        <p>{name} </p>
    </div>
  )
}

export default App
