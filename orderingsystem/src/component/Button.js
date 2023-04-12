const Button = ({type,labelText}) => {
  return (
    <div className="col-12">
      <button className="btn btn-primary w-100" type={type} >
        {labelText}
      </button>
    </div>
  );
};

export default Button;
