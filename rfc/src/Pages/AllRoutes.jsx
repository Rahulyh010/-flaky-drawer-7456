import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Navbar from "./navbar"
import Menu from "./menu"

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/menu" element={<Menu/>}/>
        </Routes>
    )
}

export default AllRoutes