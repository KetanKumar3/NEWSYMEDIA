import React, { useState } from "react"
import Cardrender from "./component/Cardrender"
import Navbar from "./component/Navbar"

function App() {
  
  const [category,setCategory]=useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Cardrender category={category}/>
    </>
  )
}

export default App
