import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Navbar from "./navbar"
import Menu from "./menu"
import Cart from "./cartpage"

function AllRoutes(){

    return (
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/menu" element={<Menu/>}/>
             <Route path="/cart/:id" element={<Cart/>}/>
        </Routes>
    )
}

export default AllRoutes