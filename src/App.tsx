import { useState } from "react"
import "./App.css"
import usePasswordGenerators from "./hooks/use-password-generators"

const App = () => {
  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title: "Include uppercase letters", state: false},
    {title: "Include lowercase letters", state: false},
    {title: "Include numbers", state: false},
    {title: "Include symbols", state: false},
  ])


  const { password, errorMessage, generatePassword } = usePasswordGenerators()
 

  const handleCheckboxChange = ( index: number ) => {
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state

    setCheckboxData(updatedCheckboxData)    
  }

  return (
    <div className="container">

      {/* Password text and copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={() => {}}> Copy </button>
        </div> )}

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
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
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
                onChange={() => handleCheckboxChange(index)}
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