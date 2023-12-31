import { useState } from "react"
import "./App.css"
import usePasswordGenerators from "./hooks/use-password-generators"
import StrengthChecker from "./components/StrengthChecker"
import Button from "./components/Buttons"
import Checkbox from "./components/Checkbox"

const App = () => {
  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title: "Include uppercase letters", state: false},
    {title: "Include lowercase letters", state: false},
    {title: "Include numbers", state: false},
    {title: "Include symbols", state: false},
  ])

  const [copied, setCopied] = useState(false)

  const { password, errorMessage, generatePassword } = usePasswordGenerators()

  const handleCheckboxChange = ( index: number ) => {
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state

    setCheckboxData(updatedCheckboxData)    
  }

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(password) 
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">

      {/* Password text and copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button text={copied? "Copied" : "Copy"} customClass="copyBtn" onClick={handleCopy} />
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
            <Checkbox
              key={index}
              title={item.title}
              state={item.state}
              onChange={() => handleCheckboxChange(index)}
            />
          )
        }
      )}
      </div>

      {/* Strength */}
      <StrengthChecker password={password} />

      {/* Error handling */}
      {errorMessage && <div className="error"> {errorMessage} </div>}

      {/* Generate button */}
      <Button 
        customClass="generateBtn" 
        text="Generate password" 
        onClick={() => generatePassword(checkboxData, length)} 
      />

    </div>
  )
}

export default App