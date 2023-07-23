import { useState } from "react"

const usePasswordGenerators = () => {
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const generatePassword = (checkboxData: any[], length: any ) => {
        let charset = "", 
            generatedPassword = "";

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const selectedOption = checkboxData.filter((checkbox) => checkbox.state)
        
        if(selectedOption.length === 0) {
            setErrorMessage("Please select at least one option")
            setPassword("")
            return
        }

        selectedOption.forEach((option: {title: string}) => {
            switch (option.title) {
                case "Include uppercase letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case "Include lowercase letters":
                    charset += "abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include numbers":
                    charset += "0123456789"
                    break;
                case "Include symbols":
                    charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="
                    break;
                default:
                    break;
            }
        })

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex]
        }

        setPassword(generatedPassword)
        setErrorMessage("")
    }
    
    return { password, errorMessage, generatePassword }
}

export default usePasswordGenerators