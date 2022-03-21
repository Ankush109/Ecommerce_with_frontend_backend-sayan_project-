import React from 'react'
import { Fragment } from 'react'
import "./home.css"

const Home = () => {
  return <Fragment>
      <div className='banner'>
          <p>welcome to my website</p>
            <h1>Find amazing products below</h1>
            <a href="#container">
                <button>scroll</button>
            </a>
      </div>
  </Fragment>
  
}

export default Home