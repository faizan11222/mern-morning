import AppNavbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage"
import StudentCard from "./components/StudentCard"

function App() {

  return (
    <BrowserRouter>
    <AppNavbar />
     <StudentCard />
    <Routes>
      <Route path='/' element={<HomePage />} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default App
