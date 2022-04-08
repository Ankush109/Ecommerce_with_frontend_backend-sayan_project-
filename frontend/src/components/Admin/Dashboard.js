import React ,{useEffect} from 'react'
import Sidebar from './Sidebar.js'

import { useSelector, useDispatch } from "react-redux";
import "./dashboard.css"
import {useAlert} from "react-alert"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {Doughnut,Line} from "react-chartjs-2"
import { getallproductsadmin } from '../../actions/productaction.js';
const Dashboard = () => {

  const alert = useAlert();
  const dispatch =useDispatch()
  const { error, products } = useSelector((state) => state.product);
  let outofstock =0
  products && products.forEach((item)=>{
    if(item.stock===0){
      outofstock +=1;
    }
  })
  useEffect(()=>{
    if(error){
      alert.error(error)
      console.log(error);
    }
      dispatch(getallproductsadmin())
    },[dispatch,error,alert]
  )
  const linestate  ={
    labels:["Initial Amount","Amount Earned"],
    datasets:[
      {
        label:"TOTAL AMOUNT",
        backgroundColor:["tomato"],
        hoverBackgroundColor:["rgb(197,72,40)"],
        data:[0,4000]
      }
    ]
  }
  const Doughnutstate  ={
    labels:["out of stock","instock"],
    datasets:[
      {
       
        backgroundColor:["red","blue"],
        hoverBackgroundColor:["yellow"],
        data:[2,10]
      }
    ]
  }
  return (
    <div className="dashboard">

    <Sidebar />

    <div className="dashboardContainer">
      <Typography component="h1">Dashboard</Typography>

      <div className="dashboardSummary">
        <div>
          <p>
             Total Amount <br /> ₹300
          </p>
        </div>
        <div className="dashboardSummaryBox2">
          <Link to="/admin/products">
            <p>Product</p>
            <p>{products && products.length} </p>
          </Link>
          <Link to="/admin/orders">
            <p>Orders</p>
            <p>4</p>
          </Link>
          <Link to="/admin/users">
            <p>Users</p>
            <p>4</p>
          </Link>
        </div>
      </div>
  

  
    </div>
  </div>
  )
}

export default Dashboard