
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import Header from "./components/Header/Header"
import Room from "./(admin)/Room/Room";
import Home from "./(admin)/Home/Home";
function App() {
  const location = useLocation();
  console.log(location.pathname);
  const shouldRenderHeader = location.pathname === "/real/admin" || location.pathname === "/upload-rooms" || location.pathname === "/upload-building" ;

  

  return (
    <div>
      {shouldRenderHeader && <Header />}
      <Routes>
        <Route path="/upload-rooms" element={<Room />} />
        <Route path="/real/admin" element={<Home />} />


      </Routes>

    
    </div>
  )
}

export default App
