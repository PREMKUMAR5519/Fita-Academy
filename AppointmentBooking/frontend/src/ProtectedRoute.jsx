import React from 'react'
import {jwtDecode} from 'jwt-decode'
import { Outlet,Navigate } from 'react-router-dom'
function ProtectedRoute({allowaccess}) {
    const Token = localStorage.getItem('token')
    if(!Token){
        return <Navigate to='/login'/>
    }
    const ExtractedToken = jwtDecode(Token)
    

    if(ExtractedToken?.role == allowaccess){
      return <Outlet/>
    }
    if(ExtractedToken?.role != allowaccess ){
       return <Navigate to='/login'/>
    }
   
}

export default ProtectedRoute