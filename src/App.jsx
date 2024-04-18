
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Header from "./components/Header/Header"
import RoomsView from "./Pages/RoomsView";
import Home from './Pages/Home'
import Buildings from "./Pages/AddBuilding";
import Room from './Pages/AddRooms'
import Building1View from "./Pages/Building1View";
import BookRoom from "./Pages/BookRoom";
import TenentView from "./Pages/TenentView";
import TenentAddedSuccess from "./Pages/TenentAddedSuccess";
import EditTenent from "./Pages/EditTenent";
import EditBuilding from "./Pages/EditBuilding";
import RoomsEdit from "./Pages/RoomsEdit";
import TenentRenew from "./Pages/TenentRenew";
import TenentTermminated from "./Pages/TenentTermminated";
import MoreRoom from "./Pages/MoreRoom";
import { useState , Suspense} from "react";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building";
  const [state , setState] = useState([{},{}])
  
  



  return (
    <div>
      {shouldRenderHeader && <Header />}
      <Suspense fallback={<p>loading..</p>}>
      <Routes>
       
        <Route path="/room" element={<Room />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path='/viewrooms' element={<RoomsView />} />
        <Route path="/" element={<Home />} />
        <Route path="/building/:id" element={<Building1View />} />
        <Route path="/booknow/:id" element={<BookRoom />} />
        <Route path="/ViewTenent" element={<TenentView />} />
        <Route path="/success/:id" element={<TenentAddedSuccess />} />
        <Route path="/edittenent/:id" element={<EditTenent />} />
        <Route path="/buildingedit/:id" element={<EditBuilding />} />
        <Route path="/roomedit/:id" element={<RoomsEdit />} />
        <Route path="/renewtenent" element={<TenentRenew />} />
        <Route path="/terminated" element={<TenentTermminated />} />

        {state.map((val,index)=>  <Route path={`/addmore/${index+1}`} element={<MoreRoom state={state} setState={setState} />} />)}
      

        
      </Routes>
      </Suspense>


    </div>
  )
}

export default App
