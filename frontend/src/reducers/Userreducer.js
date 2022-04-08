import {
  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, CLEAR_ERRORS,REGISTER_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,LOADUSER_FAIL,LOADUSER_REQUEST,LOADUSER_SUCCESS,LOGOUT_FAIL,LOGOUT_SUCCESS,UPDATEUSER_FAIL,UPDATEUSER_REQUEST,UPDATEUSER_RESET,UPDATEUSER_SUCCESS


} from "../constants/userconstant"

 

export const userreducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      case LOADUSER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        case LOADUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
      case LOGOUT_SUCCESS:
        return {
          loading:false,
          user:null,
          isAuthenticated:false


        }


    case LOGIN_FAIL:
      case REGISTER_FAIL :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    
      case LOADUSER_FAIL:
        return {
          loading:false,
          isAuthenticated:false,
          user:null,
          error:action.payload
        }
        case LOGOUT_FAIL :
          return {
            ...state,
            laoding:false,
            error:action.payload
          }
    case CLEAR_ERRORS:

      return {
        ...state,
        error: null,
      }
    default:
      return state

  }

}

export const profilereducer = (state = {  }, action) => {
  switch (action.type) {
    case UPDATEUSER_REQUEST:

      return {
        ...state,
        loading:true
      };
 case UPDATEUSER_SUCCESS:
      return {
        ...state,
     isupdated:action.payload
      };
    

    case UPDATEUSER_FAIL:
      return {
        ...state,
        loading: false,
     error: action.payload,
      };
 case UPDATEUSER_RESET:
   return {
     ...state,
     isupdated:false,
   }
    case CLEAR_ERRORS:

      return {
        ...state,
        error: null,
      }
    default:
      return state

  }

}