/**
 * Select - reusable custom select component
 * props:
 * label- display name for the select field
 * value- the value stored in the form
 * name- references the item in the form
 * type- type of select being used
 * selectClass- custom class for the select
 * handleChange- updates the value of the select
 * array- list of objects that displays as options ( Ex.{ value: "", name: ""} )
 * error- displays error messages for the select TODO: implement error handling
 */
const Select = ({ label, value, name, selectClass, handleChange, error, array }) => {
    return (
        <div className={`select-box ${ selectClass ? selectClass : ""}`}>
                <label className="select-label">
                    { label }
                </label>
                <select value={ value } name={ name } onChange={ handleChange } className={`select-field ${ error ? "error" : "" }`}>
                    {array && array.map((item, index) => (
                        <option value={ item.value } key={ index }>{ item.name }</option>
                    ))}
                </select>
        </div>
    )
}

export default Select;