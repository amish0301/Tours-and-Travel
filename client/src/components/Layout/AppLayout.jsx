import React from 'react'
import Footer from '../Footer'
import Routers from '../../router/Routers'
import Nav from '../Header'

const AppLayout = () => {
  return (
    <>
      <Nav />
      <Routers />
      <Footer />
    </>
  )
}

export default AppLayout