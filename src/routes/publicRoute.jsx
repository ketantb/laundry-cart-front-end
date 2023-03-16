import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PublicRoute() {
    const userName = localStorage.getItem('userName')
    const token=localStorage.getItem('token')
    //console.log(userData)
    if ((!userName) || (!token)) {
        return (<Outlet />)
    }
    else {
        return (
            <Navigate to='/order' />
        )
    }
}
export default PublicRoute;