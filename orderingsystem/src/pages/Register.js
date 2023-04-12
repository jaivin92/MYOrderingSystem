import Wrapper from "../assets/wrapper/LoginWrapper";
import { FormRow, CheckBox, Button, Logo, DropDown } from "../component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const loginState = {
  name: "",
  email: "",
  password: "",
  remember: false,
  terms: false,
};
let showCheck = false
const Register = () => {
  const {
    RegisterUser,
    apiError,
    isLogin,
    getUserList,
    UserList,
    isUserList,
    userModel,
    isLoading,
    displayAlert,
    showAlert,
    alertText,
  } = useAppContext();
  const [values, setValue] = useState(loginState);
  const [tnc, setTnc] = useState(loginState.terms);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    loginState.terms = tnc;
    if (!tnc) {
      console.log("You clicked submit.", loginState.terms);
    }

    if (!loginState.terms) {
      //alert("Please Accept Terms");
      showCheck = true
    }

    if (!email && !password) {
      displayAlert();
      return;
    }
    RegisterUser({ email, password });

    //navigate('/')

    // if(isLogin){
    //   navigate('/dashboard')
    // }
  }

  if (!isUserList) {
    getUserList();
  }

  // useEffect(()=>{
  //   if(!isUserList){
  //     getUserList()
  //   }
  // })

  const onCheckChanged = (e) => {
    setTnc(e.target.checked);
  };

  useEffect(() => {
    if (userModel) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [userModel, navigate]);

  return (
    <Wrapper>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <Logo />
              </div>
              {/* <!-- End Logo --> */}

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                    <p className="text-center small">
                      Enter your personal details to create account
                    </p>

                    {isLogin && <h6>{apiError}</h6>}
                    {/* {showAlert && <h6>{alertText}</h6>} */}
                  </div>
                  {/* no validate */}
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                  >
                    {/* <FormRow
                      type="text"
                      name="name"
                      value={values.name}
                      handleChange={handleChange}
                    /> */}

                    <DropDown labelText="Select User" list={UserList} />

                    <FormRow
                      type="email"
                      name="email"
                      value={values.email}
                      handleChange={handleChange}
                      labelText="Email"
                      isRequired={showAlert}
                      alertMessage="Please enter an email address "
                    />

                    <FormRow
                      type="password"
                      name="password"
                      value={values.password}
                      handleChange={handleChange}
                      labelText="Password"
                      isRequired={showAlert}
                      alertMessage="Please enter password"
                    />

                    {/* <CheckBox
                      value={tnc}
                      handleChange={onCheckChanged}
                      labelText={"I agree and accept the terms and conditions"}
                    /> */}
 
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          onChange={(e) => setTnc(e.target.checked)}
                          id="rememberMe"
                        />
                        
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          I agree and accept the terms and condition
                        </label>
                        {showCheck && <h6>Accept Terms</h6>}

                      </div>
                    </div>
               
                    {/* <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span> */}

                    <Button
                      labelText={"Create Account"}
                      type="submit"
                      disabled={isLoading}
                    />
                    <div className="col-12">
                      <p className="small mb-0" onClick={() => navigate("/")}>
                        Already have an account? <a href="/"> Log in </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Register;
