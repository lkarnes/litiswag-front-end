
/**
 * Input - reusable custom input component
 * props:
 * label- display name for the input field
 * value- the value stored in the form
 * name- references the item in the form
 * type- type of input being used
 * inputClass- custom class for the input
 * handleChange- updates the value of the input
 * error- displays error messages for the input TODO: implement error handling
 */
const Input = ({ label, value, name, type, inputClass, handleChange, error }) => {
    return (
        <div className={`input-box ${ inputClass ? inputClass : ""}`}>
                <label className="input-label">
                    { label }
                </label>
                <input type={ type } value={ value } name={ name } onChange={ handleChange } className={`input-field ${ error ? "error" : "" }`}/>
        </div>
    )
}

export default Input;