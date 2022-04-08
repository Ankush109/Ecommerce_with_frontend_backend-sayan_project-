import React, { Fragment, useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { clearerrors, getproduct,getallproducts} from '../../actions/productaction'
import Loader from '../layout/Loader'
import Product from './Product'
import "./allproducts.css"
const Allproducts = () => {
    const dispatch =useDispatch()
    const {products,loading,error} =useSelector(state=>state.product)
    useEffect(()=>{
dispatch(getallproducts())
    },[dispatch])
  return (
    <Fragment>
        {loading ? <Loader/> :
        <Fragment>
            <h2 className='productsheading'> Products</h2>
            <div className='products'>

            {products && products.map((product)=><Product product={product}/>)}

            </div>

            </Fragment>}
    </Fragment>
  )
}

export default Allproducts