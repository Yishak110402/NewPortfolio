import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";

export default function App(){
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
    </Routes>
   </BrowserRouter>
  )
}

