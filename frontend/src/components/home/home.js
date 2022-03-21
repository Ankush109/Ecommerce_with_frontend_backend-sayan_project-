import React from 'react'
import { Fragment } from 'react'
import Product from '../products/Product'
import "./home.css"
import Metadata from '../layout/Metadata'
import { getproduct } from '../../actions/productaction';
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'


const Home = () => {
    const alert =useAlert()
    const dispatch =useDispatch()
    const {loading,error,products,productscount} =useSelector(state=>state.product)
    useEffect(()=>{
        if(error){
            return alert.error(error)
        }
        dispatch(getproduct())
    },[dispatch,error,alert])
  return <Fragment>
      {loading ? (
     <Loader/>
      ):(<Fragment>
        <Metadata title="ANKUSH"/>
        <div className='banner'>
            <p>welcome to my website</p>
              <h1>Find amazing products below</h1>
              <a href="#container">
                  <button>scroll</button>
              </a>
        </div>
        <h2 className='homeheading'> Featured Products</h2>
        <div className='container' id="container">
     {products && products.map((product)=><Product product={product}/>)}
  
        </div>
    </Fragment>)}
  </Fragment>
  
}

export default Home