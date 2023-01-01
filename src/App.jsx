import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./routes/Destination";
import Home from "./routes/Home";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
