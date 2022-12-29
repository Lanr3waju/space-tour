import Home from "./components/Home"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="lg:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile bg-home-mobile bg-no-repeat bg-cover text-white">
      <Nav />
      <Home />
    </div>
  )
}

export default App
