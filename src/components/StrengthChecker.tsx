interface StrengthCheckerProps {
    password: string;
}

const StrengthChecker: React.FC<StrengthCheckerProps>= ({ password }) => {
    
  const gerPasswordStrength = () => {
    const passwordLength = password.length

    if(passwordLength < 1) {
      return ""
    } else if (passwordLength < 4) {
      return "Very weak"
    } else if (passwordLength < 8) {
      return "Weak"
    } else if (passwordLength < 12) {
        return "Medium"
    } else if (passwordLength < 16) {
        return "Strong"
    } else {
        return "Very strong"
    }

}
    const passwordStrength = gerPasswordStrength()

    if(!passwordStrength) {
        return <></>
    }

    return (
    <>
        <div className="password-strength">
            Strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span>
        </div>
        

    </>
  )
}

export default StrengthChecker