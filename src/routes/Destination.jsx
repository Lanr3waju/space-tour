
import Nav from "../components/Nav"
import Destinations from "../components/Destinations"

function Destination() {
    return (
        <div className="lg:bg-destination-desktop md:bg-destination-tablet sm:bg-destination-mobile bg-destination-mobile bg-no-repeat min-h-screen bg-cover text-white">
            <Nav />
            <p className="text-2xl font-barlow mt-14 ml-28 tracking-[5px]"><span className="mr-[28px] opacity-25">01</span> PICK YOUR DESTINATION</p>
            <Destinations />


        </div>
    )
}

export default Destination
