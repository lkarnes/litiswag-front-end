
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