import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Page1 from "./goku"
import Show from "./show"
import Add from "./Add"
import Deleteform from "./Delete"
import Updateform from "./update"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/login" element={<Auth />} />
        <Route path="/Read" element={<Show />} />
        <Route path="/delete" element={<Deleteform />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/update" element={<Updateform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App