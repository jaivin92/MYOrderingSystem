import React, {  useReducer, useContext, } from "react";
import { TOGGLE_SIDEBAR,DISPLAY_ALERT,CLEAR_ALERT ,LOGIN_BEGIN, LOGIN_SUCCESS ,LOGIN_FAIL,COMPANY_USER_SUCCESS,COMPANY_USER_FAIL} from './action'
import reducer from "./reducer";
import axios from "axios"
const userModel = localStorage.getItem("userModel");


const initialState = {
    isLoading: false,
    showSidebar:false,
    showAlert: false,
    alertText: "",
    alertType: "",
    loginState : {
        email: '',
        password: '',
        remember:false,
      },
    isLogin  : false,
    isApiError: false,
    apiError : "NO",
    token: "token",
    UserList :[],
    isUserList : false,
    data : [],
    //userModel : {} ,
    userModel :null,
}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
  console.log('context -->  '+userModel)
    const [state , dispatch] = useReducer(reducer, initialState);


    
    const toggleSidebar = ()=>{
        dispatch({type:TOGGLE_SIDEBAR})
    }

    const displayAlert = () => {
      dispatch({ type: DISPLAY_ALERT });
      clearAlert();
    };
  
    const clearAlert = () => {
      setTimeout(() => {
        dispatch({ type: CLEAR_ALERT });
      }, 3000);
    };

    const addUserToLocalStorage = ({ user}) => {
      localStorage.setItem("userModel", JSON.stringify(user));
    };
  
    const removeUserFromLocalStorage = () => {
      localStorage.removeItem("userModel");
    };



    const authFetch = axios.create({
        baseURL: "/api/v1",
      });

      // interceptor request
  authFetch.interceptors.request.use(
    (config) => {
      // config.headers.Authorization = `Bearer ${state.token}`;
      // console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // interceptor response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);

      if (error.response.status === 401) {
        console.log("AUTH ERROR");
        //logoutUser();
      }
      return Promise.reject(error);
    }
  );


const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
     // const response = await axios.post("/api/v1/login", currentUser);
      const response = await authFetch.post("login", currentUser);
      const { userModel } = response.data;
      console.log(response , ' *** /n ' ,userModel)
      initialState.userModel = userModel
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { userModel },
      });
     // addUserToLocalStorage({ user, token, location });
    } catch (error) {
      //console.log(error.response)
      dispatch({
        type: LOGIN_FAIL,
        payload: { msg: error.response.data.msg },
      });
    }
    //clearAlert();
  };


  const RegisterUser = async (currentUser) => {
     dispatch({ type: LOGIN_BEGIN });
     try {
       //const response = await axios.post("/api/v1/register", currentUser);
       const response = await authFetch.post("register", currentUser);
       //console.log(response)
       const { userModel } = response.data;
       console.log(response , ' *** /n ' ,userModel)
       initialState.userModel = userModel
       dispatch({
         type: LOGIN_SUCCESS,
         payload: { userModel },
       });
       addUserToLocalStorage(userModel);
     } catch (error) {
       //console.log(error.response)
       dispatch({
         type: LOGIN_FAIL,
         payload: { msg: error.response.data.msg },
       });
     }
     //clearAlert();
   };

  const getUserList = async ()=>{
    if(!initialState.isUserList) {
      try {
      
        // const response = await authFetch.get("userList")
         const response = await axios.get("/api/v1/userList")
         
         //const { data } = response.data;
         initialState.data = response.data
         console.log('*Res**', initialState.data)
         dispatch({
           type: COMPANY_USER_SUCCESS,
           payload:initialState.data
         })
        // removeUserFromLocalStorage()
       } catch (error) {
         console.log('*error**', error)
         dispatch({
           type: COMPANY_USER_FAIL,
           payload: { msg: error.response.data.msg },
         });
       }
    }
    
  }


    return (<AppContext.Provider value={{...state ,displayAlert,toggleSidebar,loginUser,getUserList,RegisterUser}}>
    {children}
    </AppContext.Provider>)
}


// hook

const useAppContext = () => {
    return  useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}