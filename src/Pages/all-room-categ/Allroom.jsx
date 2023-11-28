import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import axios from 'axios'

function Allroom() {
  const [data , setData] = useState([])
    const {id} = useParams()
    const getRoom = async()=>{
        const response = await axios(`http://localhost:3000/get-room/`,{
            method:"GET",
            headers:{
                BuildId : id
            }
        })
        console.log(response.data)
        setData(response.data.natural)
    }

    useEffect(()=>{
        getRoom()
    },[])
    console.log(data)

    
  return (
    <div>
        <Header />
        {data.map((val)=>( 
           <Link to={`/rooms/${val._id}`}><li>{val.title}</li></Link>
        ))}
    </div>
  )
}

export default Allroom
