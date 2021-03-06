import axios from "axios"
import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS, PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_REQUEST} from "../constants/productconstant"
export const getproduct =()=> async (dispatch)=>{
    try {
        
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })
        const {data} =await axios.get("/api/v1/products")
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}
export const getproductdetails =(id)=> async (dispatch)=>{
    try {
        
        dispatch({
            type:PRODUCT_DETAILS_REQUEST
        })
        const {data} =await axios.get(`/api/v1/products/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}
//CLEARING THE ERRORS

export const clearerrors =()=> async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}
