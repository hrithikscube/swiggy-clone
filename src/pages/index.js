import Footer from '@/components/common/Footer'
import React from 'react'
import Home from './home'
import Header from '@/components/common/Header'

const index = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default index