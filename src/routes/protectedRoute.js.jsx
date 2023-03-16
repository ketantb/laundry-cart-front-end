import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const userName = localStorage.getItem('userName')
    const token=localStorage.getItem('token')
    //console.log(userData)
    if (userName || token) {
        return (<Outlet />)
    }
    else {
        return (
            <Navigate to='/' />
        )
    }
}
export default ProtectedRoute