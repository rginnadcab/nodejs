import React from 'react'
import MetaData from "../layout/MetaData.js";
import "./Home.css";


const Home = () => {
  return (
    <>        
        <MetaData title="rgHanks" />

        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
          </div>            
    </>
  )
}

export default Home