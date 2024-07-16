import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export const ProtectCart= ()=>{
    const navigate = useNavigate()
    
    useEffect(()=>{
        const CheckToken = Cookies.get("token")

        if(!CheckToken){
            navigate("/")
        }
    },[])
    return <Outlet />
}