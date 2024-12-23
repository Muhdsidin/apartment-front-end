
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
import AdminTrue from "./Pages/AdminTrue";
import TenentTermminated from "./Pages/TenentTermminated";
import MoreRoom from "./Pages/MoreRoom";
import { useState , Suspense} from "react";
import { ProtectCart } from "./utils/ProtectRoute";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building";
  const [state , setState] = useState([{},{}])
  
  



  return (
    <div>
      {shouldRenderHeader && <Header />}

        
      <Routes>
       <Route element={<ProtectCart />} >

        <Route path="/room" element={<Room />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path='/viewrooms' element={<RoomsView />} />
        <Route path="/home" element={<Home />} />
        <Route path="/building/:id" element={<Building1View />} />
        <Route path="/booknow/:id" element={<BookRoom />} />
        <Route path="/ViewTenent" element={<TenentView />} />
        <Route path="/success/:id" element={<TenentAddedSuccess />} />
        <Route path="/edittenent/:id" element={<EditTenent />} />
        <Route path="/buildingedit/:id" element={<EditBuilding />} />
        <Route path="/roomedit/:id" element={<RoomsEdit />} />
    <Route path="/" element={<AdminTrue />} />
        <Route path="/terminated" element={<TenentTermminated />} />


        </Route>

        
      </Routes>
        



    </div>
  )
}

export default App
