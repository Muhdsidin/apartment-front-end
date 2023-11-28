import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBuild() {
    const [build , setBuild ] = useState([])
    const getBuilddata = async(req,res)=>{
        try {
         const response = await axios("http://localhost:3000/get-building")
         console.log(response.data)
         setBuild(response.data)
        } catch (error) {
         console.log(error)
        }
       }

       useEffect(()=>{ 
        getBuilddata()
       },[])
  return (
    <div>
        <Header />
      <ul>
        
        {build.map((val)=>( 
            <Link to={`/building/${val._id}`}><li>{val.name}</li></Link>
        ))}
      </ul>
    </div>
  )
}

export default AllBuild
