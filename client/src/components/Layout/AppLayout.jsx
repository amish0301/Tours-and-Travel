import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Routers from '../../router/Routers'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default AppLayout