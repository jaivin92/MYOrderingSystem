const FormRow = ({type, name, value,handleChange, labelText, isRequired, alertMessage })=>{

    return (
        <div >
        <label htmlFor={name} className="form-label">{labelText || name}</label>
        <div>
          <input type={type} name={name} className="form-control " id="yourUsername" onChange={handleChange} value={value}  />
          { isRequired && <h6 >{alertMessage}</h6> }
        </div>
      </div>

      
    );
}

export default FormRow