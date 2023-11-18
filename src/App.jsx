
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Header from "./components/Header/Header"
import Room from "./components/Room/Room";
import Home from './Pages/Home'
import Buildings from "./Pages/AddBuilding";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building" ;

  

  return (
    <div>
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/upload-rooms" element={<Room />} />
        <Route path="/Buildings" element={<Buildings/>}/>
        <Route path="/" element={<Home/>} />


      </Routes>

    
    </div>
  )
}

export default App
