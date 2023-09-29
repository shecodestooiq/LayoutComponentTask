import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebbar from './Sidebbar'

export default function Layout({children}) {
  return (
    <div>
     <Header/>
     <div className='middle'>
     <Sidebbar/>
       {children}
     </div>
    
     <Footer/>
    </div>
  )
}
