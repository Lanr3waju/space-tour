import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./routes/Destination";
import Home from "./routes/Home";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/crew/:id" element={<Crew />} />
        <Route path="/technology/:id" element={<Technology />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
