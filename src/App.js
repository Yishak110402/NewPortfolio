import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

export default function App(){
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
    </Routes>
    <Footer/>
    <Copyright />
   </BrowserRouter>
  )
}

