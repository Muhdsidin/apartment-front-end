import React from 'react'
import AddmoreRoom from '../components/Room/AddmoreRoom'
import Header from '../components/Header/Header'
function MoreRoom({setState , state}) {
  //console.log(state)
  return (
    <div>
        <Header/>
      <AddmoreRoom state={state} setState={setState}/>

    </div>
  )
}

export default MoreRoom
