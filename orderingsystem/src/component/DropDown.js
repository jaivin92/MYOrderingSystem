
const DropDown = ({labelText,list}) => {
  console.log('Drop', list)
    return (
        <div className="col-12">
        <label htmlFor="inputState" className="form-label">{labelText}</label>
        <select id="inputState" className="form-select">
          {/* <option selected>Choose...</option>
          <option>...</option> */}
                 {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}{" "}
            </option>
          );
        })}
        </select>
      </div>
    );
};

export default DropDown;