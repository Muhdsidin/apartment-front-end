import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const ProtectCart= ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const CheckToken = localStorage.getItem("token")

        if(!CheckToken){
            navigate("/")
        }
    },[])
    return <Outlet />
}