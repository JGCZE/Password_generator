interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    customClass?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, customClass }) => { 
    
    return (
        <button 
            className={customClass} 
            onClick={onClick}
        >
            {text} 
        </button>
    )
 }

export default Button