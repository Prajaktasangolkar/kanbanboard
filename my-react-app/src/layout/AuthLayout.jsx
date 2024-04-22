import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {
    

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout