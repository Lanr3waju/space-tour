import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./routes/Destination";
import Home from "./routes/Home";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

function App() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
