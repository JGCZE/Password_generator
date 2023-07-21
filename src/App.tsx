import { useState } from "react"
import "./App.css"

const App = () => {
  

   


  const checkboxData = [
    {title: "Include uppercase letters", state: false},
    {title: "Include lowercase letters", state: false},
    {title: "Include numbers", state: false},
    {title: "Include symbols", state: false},
  ]

  return (
    <div className="container">
      {/* Password text and copy */}
      <div className="header">
        <div className="title"> Kh6y#Lh3& </div>
        <button className="copyBtn" onClick={() => {}}> Copy </button>
      </div>

      {/* Characters length */}
      <div className="charLength"> 
        <span>
          <label htmlFor=""> Character Length</label>
          <label htmlFor="">{length}</label>          
        </span>

        <input 
          type="range"
          min="4"
          max="20"
         
         />
      </div>

      {/* Checkboxes */}
      <div className="checkboxes"> 
        
        {checkboxData.map((item, index) => {
          return (
            <div key={index}>
              <input 
                type="checkbox"
                checked={item.state}
                onChange={() => {}}
              />
              <label htmlFor=""> {item.title} </label>
            </div>
          )
        }
      )}
      </div>


      {/* Strength */}
      {/* Generate button */}
      <button className="generateBtn" onClick={(first) => { second }}>Generate password</button>

    </div>
  )
}

export default App