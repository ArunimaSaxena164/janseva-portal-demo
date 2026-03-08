import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import ApplicationForm from "./pages/ApplicationForm"
import Success from "./pages/Success"

function App() {

  return (

    <div className="flex flex-col min-h-screen">

      <Navbar/>

      <div className="flex-grow">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apply-scholarship" element={<ApplicationForm/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
        </BrowserRouter>

      </div>

      <Footer/>

    </div>

  )
}

export default App