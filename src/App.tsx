
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
