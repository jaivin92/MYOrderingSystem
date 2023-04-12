import { TOGGLE_SIDEBAR ,DISPLAY_ALERT,CLEAR_ALERT ,LOGIN_BEGIN, LOGIN_SUCCESS,LOGIN_FAIL,COMPANY_USER_SUCCESS,COMPANY_USER_FAIL} from './action'

import { initialState } from "./appContext";

const reducer = (state, action) => {
    if(action.type === TOGGLE_SIDEBAR){
        return {
            ...state,
            showSidebar: !state.showSidebar,
        };
    }

    if (action.type === DISPLAY_ALERT) {
        return {
          ...state,
          showAlert: true,
          alertType: "danger",
          alertText: "Please provide all values!",
        };
      }
    
      if (action.type === CLEAR_ALERT) {
        return { ...state, showAlert: true, alertType: "", alertText: "" };
      }

    
    if(action.type === LOGIN_BEGIN){
        return {
            ...state,
            isLoading : true
        }
    }

    if(action.type === LOGIN_FAIL){
        return {
            ...state,
            isLoading : false,
            isLogin: true,
            apiError : action.payload.msg,
            isApiError :true,
            showAlert: false,
        }
    }

    if(action.type === LOGIN_SUCCESS) {
        return {
            ...initialState,
            isLoading : false,
            loginState :action.payload.loginState,
            apiError : action.payload.loginState,
            isApiError :false,
            userModel : action.payload.userModel
            
        };
    }


    if(action.type === COMPANY_USER_FAIL){
        return {
            ...state,
            UserList :["Company","Customer"],
            data:["Company","Customer"],
            //isUserList : false
        }
    }

    if(action.type === COMPANY_USER_SUCCESS) {
        return {
            ...initialState,
            UserList :action.payload.data,
           // UserList :"success",
           data:action.payload.data,
            isUserList: true
        };
    }


    throw new Error(`no such action : ${action.type}`)
}



export default reducer