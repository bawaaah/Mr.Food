import React from 'react'

import Category from '../components/Category'
import ClientNavigationBar from '../components/ClientNavigationBar.jsx'

import './Home.css'


function Home() {
  return (
    <div>
      <ClientNavigationBar />

      {/* <h2 className='homeTitle'>Categories</h2> */}
      
      <div className='container' >
        <div className="row mt-5">
          <div className="col">
            <Category />
          </div>
          <div className="col">
            <Category />
          </div>
          <div className="col">
            <Category />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <Category />
          </div>
          <div className="col">
            <Category />
          </div>
          <div className="col">
            <Category />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home