import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Rooms() {
    const {id} = useParams()
    console.log(id)
    const [data , setData] = useState({})
    const fetchRoom = async ()=>{
        try {
            const response = await axios("http://localhost:3000/get-active-room",{
                method:"GET",
                headers:{
                    roomid: id
                }
            })
            console.log(response.data)
            setData(response.data)
        } catch (error) { 
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchRoom()
    },[])
  return (
    <div>
        <Header />
      <p>name : {data.title}</p> <br />
      <p>prize: {data.prize}
      </p>
    </div>
  )
}

export default Rooms
