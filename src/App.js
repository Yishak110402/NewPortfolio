import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import { useContext, useEffect } from "react";
import { GeneralContext } from "./hooks/GeneralContext";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contact";

export default function App() {
  const {navOpen} = useContext(GeneralContext)
  useEffect(function(){
    document.body.style.overflow = navOpen ? "hidden" : "auto"
  },[navOpen])
  return (
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts/>} />
          </Routes>
          <Footer />
          <Copyright />
        </BrowserRouter>
      </main>
  );
}
