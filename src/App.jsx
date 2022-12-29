import Home from "./components/Home"

function App() {
  return (
    <div className="lg:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile bg-home-mobile min-h-screen bg-no-repeat bg-cover">
      <Home />
    </div>
  )
}

export default App
