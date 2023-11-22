
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Header from "./components/Header/Header"
import TenentAdd from "./Pages/TenentAdd";
import Home from './Pages/Home'
import Buildings from "./Pages/AddBuilding";
import Room from './Pages/AddRooms'
function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building" ;

  

  return (
    <div>
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/buildings" element={<Buildings/>}/>
        <Route path="/addtenent" element={<TenentAdd/>}/>
        <Route path="/" element={<Home/>} />
        



      </Routes>

    
    </div>
  )
}

export default App
