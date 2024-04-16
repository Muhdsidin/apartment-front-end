import React from 'react'
import ViewRooms from '../components/ViewRooms/ViewRooms'
import Header from '../components/Header/Header'
import {Suspense} from "react"

export default function RoomsView() {
  return (
    <div>
      <Header/>
      <Suspense fallback={<>Loading... pls wait </>}>
      <ViewRooms/>
      </Suspense>      
    </div>
  )
}


