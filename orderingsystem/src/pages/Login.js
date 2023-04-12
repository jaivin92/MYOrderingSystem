import { useEffect, useState } from "react";
import Wrapper from "../assets/wrapper/LoginWrapper";
import { FormRow, CheckBox, Button, Logo,DropDown } from "../component";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const loginState = {
  email: "",
  password: "",
  remember: false,
};

const Login = () => {
  const { loginUser,apiError ,isLogin,getUserList,UserList,isUserList,userModel , isLoading , displayAlert,showAlert,} = useAppContext();
  const [values, setValue] = useState(loginState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  
  

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    console.log("You clicked submit.", email, password);
    //navigate('/dashboard')

    if(!email && !password) {

      displayAlert()
      return
    } 
    
    loginUser({ email, password });

    // if(isLogin){
    //   alert(apiError)
    // } else {
    //   alert(apiError)
    // }
  
    // if(isLogin){
    //   navigate('/dashboard')
    // }
   
  }
 // getUserList()
  useEffect(()=>{
    if(!isUserList){
      getUserList()
    }
  })
  
  useEffect (()=> {
    if(userModel){
      setTimeout(()=>{
        navigate('/dashboard')
      },3000)
    }
  },[userModel,navigate])


  return (
    <Wrapper>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Logo/>
                </div>
                {/* <!-- End Logo --> */}

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>
                    {/* no validate */}
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit}
                    >
                       {/* {getUserList}  */}
                      {isLogin && <h6 >{apiError}</h6>}
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

                      <CheckBox
                        value={values.remember}
                        handleChange={handleChange}
                        labelText={"Remember Me"}
                      />

                   {isUserList && <DropDown labelText="Select User" list={UserList} /> }   

                      {/* <div class="col-12">
                        <label for="inputState" class="form-label">
                          State
                        </label>
                        <select id="inputState" class="form-select">
                          <option selected>Select</option>
                          <option>Admin</option>
                          <option>Customer</option>
                        </select>
                      </div> */}

                      <Button labelText="Login" type="submit"  disabled={isLoading}/>

                      <div className="col-12">
                        <p
                          className="small mb-0"
                          onClick={() => navigate("/register")}
                        >
                          Don't have account?{" "}
                          <a href="/register"> Create an account</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Login;
