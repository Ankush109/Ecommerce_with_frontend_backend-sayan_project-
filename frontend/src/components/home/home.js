import React from 'react'
import { Fragment } from 'react'
import Product from '../products/Product'
import "./home.css"
import Metadata from '../layout.js/Metadata'
const product ={
    name:"blue tshirt",
    images:[{url:"https://th.bing.com/th/id/OIP.po4T7EagwAD9SijbIl5GdAHaJ7?pid=ImgDet&rs=1"}],
    price:"$100",
    _id:"ankush",

}
const Home = () => {
  return <Fragment>
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
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>

      </div>
  </Fragment>
  
}

export default Home