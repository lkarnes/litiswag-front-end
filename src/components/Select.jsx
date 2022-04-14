
const Select = ({ label, value, name, selectClass, handleChange, error, array }) => {
    return (
        <div className={`select-box ${ selectClass ? selectClass : ""}`}>
                <label className="select-label">
                    { label }
                </label>
                <select value={ value } name={ name } onChange={ handleChange } className={`select-field ${ error ? "error" : "" }`}>
                    {array && array.map((item) => (
                        <option value={ item.value }>{ item.name }</option>
                    ))}
                </select>
        </div>
    )
}

export default Select;