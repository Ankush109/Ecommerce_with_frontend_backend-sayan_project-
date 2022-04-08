import {
    LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,CLEAR_ERRORS, REGISTER_SUCCESS, REGISTER_FAIL,LOADUSER_FAIL,LOADUSER_REQUEST,LOADUSER_SUCCESS,LOGOUT_FAIL,LOGOUT_SUCCESS,UPDATEUSER_FAIL,UPDATEUSER_REQUEST,UPDATEUSER_RESET,UPDATEUSER_SUCCESS
    } from "../constants/userconstant"
import axios from "axios" 
//login
export const login = (email,password)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config ={headers:{"Content-Type":"application/json"}}
        const {data} =await axios.post(`/api/v1/login`,{email,password},config
        )
  
    
    dispatch({type:LOGIN_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    }
}
//load user
export const loaduser = ()=>async(dispatch)=>{
    try{
        dispatch({type:LOADUSER_REQUEST})
       
        const {data} =await axios.get(`/api/v1/me`)
        
  
    
    dispatch({type:LOADUSER_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:LOADUSER_FAIL,payload:error.response.data.message})
    }
}

//logout user
export const  logout= ()=>async(dispatch)=>{
    try{
     
       await axios.get(`/api/v1/logout`)
    dispatch({type:LOGOUT_SUCCESS}
        )
    }catch(error){
dispatch({type:LOGOUT_FAIL,payload:error.response.data.message})
    }
}


//register
export const register = (userData)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config ={headers:{"Content-Type":"multipart/form-data"}}
        
  const {data} =await axios.post(`/api/v1/register`,userData,config);
  dispatch({type:REGISTER_SUCCESS,payload:data.user})
    
    dispatch({type:LOGIN_SUCCESS,payload:data.user}
        )
    }catch(error){
dispatch({type:REGISTER_FAIL,payload:error.response.data.message})
    }
}
//  update profile
export const updateprofile = (userData)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATEUSER_REQUEST})
        const config ={headers:{"Content-Type":"multipart/form-data"}}
        
  const {data} =await axios.put(`/api/v1/me/update`,userData,config);
  dispatch({type:UPDATEUSER_SUCCESS,payload:data.success})
 
    }catch(error){
dispatch({type:UPDATEUSER_FAIL,payload:error.response.data.message})
    }
}
//CLEARING THE ERRORS

export const clearerrors =()=> async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}

    