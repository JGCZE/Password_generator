interface CheckboxProps {
    title: string;
    state: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ title, state, onChange}) => {
  return (
        <div>
            <input 
                type="checkbox"
                checked={state}
                onChange={onChange}
            />
            <label htmlFor=""> {title} </label>
        </div>
  )
}

export default Checkbox
