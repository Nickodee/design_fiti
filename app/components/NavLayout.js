import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function NavLayout({children}) {
  return (
    <div>
        <Navbar/>
        <div className='mt-20'>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default NavLayout