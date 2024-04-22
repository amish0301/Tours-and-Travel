import React, { useEffect } from 'react'
import AppLayout from './components/Layout/AppLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  return (
    <>
      <AppLayout />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Bounce
      />
    </>
  )
}

export default App