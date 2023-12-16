
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

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building";



  return (
    <div>
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path='/viewrooms' element={<RoomsView />} />
        <Route path="/" element={<Home />} />
        <Route path="/building/:id" element={<Building1View />} />
        <Route path="/booknow/:id" element={<BookRoom />} />
        <Route path="/ViewTenent" element={<TenentView/>} />
        <Route path="/success" element={<TenentAddedSuccess/>} />




      </Routes>


    </div>
  )
}

export default App
