const CheckBox = ({ value,handleChange, labelText  })=>{

    return (
        <div className="col-12">
        <div className="form-check" >
          <input  className="form-check-input" type="checkbox" name="remember"  checked={value}  onChange={handleChange}  id="rememberMe"/>
          <div className="invalid-feedback">You must agree before submitting.</div>
          <label className="form-check-label" htmlFor="rememberMe">{labelText}</label>
          
        </div>
      </div>

      
    );
}

export default CheckBox