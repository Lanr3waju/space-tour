
import Nav from "../components/Nav"
import Crews from "../components/Crews"

function Crew() {
    return (
        <div className="lg:bg-crew-desktop md:bg-crew-tablet sm:bg-crew-mobile bg-crew-mobile bg-no-repeat bg-cover text-white h-screen overflow-hidden">
            <Nav />
            <p className="text-2xl font-barlow mt-14 ml-28 tracking-[5px]"><span className="mr-[28px] opacity-25">02</span>MEET YOUR CREW</p>
            <Crews />
        </div>
    )
}

export default Crew
