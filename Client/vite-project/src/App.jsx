import React, { useState } from 'react'
import Navsec from './Component/Navsec.jsx'
import Herosec from './Component/Herosec.jsx'
import Process from './Component/Process.jsx'
import Signup from './Component/Signup.jsx'
import Login from './Component/Login.jsx'

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
     {/* <Navsec onLoginOpen={() => setOpenLogin(true)} />
      
      <Login
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
      />
     
      <Herosec />
      <Process /> */}
       <Signup />
      {/* <Login /> */} 
    </>
  )
}

export default App
