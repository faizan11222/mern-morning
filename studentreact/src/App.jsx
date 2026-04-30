import AppNavbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage"
import AddStudentPage from "./pages/AddStudentPage"

function App() {

  return (
    <BrowserRouter>
    <AppNavbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/add" element={<AddStudentPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
