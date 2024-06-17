
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name,setName]=useState("")

  function handleChange(e){
    setName(e.target.value);
  }

  return (
<div>
        {/* Do not remove the main div */}
        <label>Enter your name : </label>
        <input type="name" placeholder="name"onChange={handleChange}/>
        <p>{name? `Hello, ${name}!`:"Please enter Your Name"}</p>
    </div>
  )
}

export default App
