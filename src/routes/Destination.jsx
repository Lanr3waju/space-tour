import { useState } from "react";
import Nav from "../components/Nav"
import Destinations from "../components/Destinations"
import data from "../destinationData";

function Destination() {
    const [activeDestination, setActiveDestination] = useState('moon');
    const destinationData = data.find(({ destination }) => destination === activeDestination);
    const { image, destination, description, distance, travelTime } = destinationData;
    return (
        <div className="lg:bg-destination-desktop md:bg-destination-tablet sm:bg-destination-mobile bg-destination-mobile bg-no-repeat min-h-screen bg-cover text-white">
            <Nav />
            <p className="text-2xl font-barlow mt-14 ml-28 tracking-[5px]"><span className="mr-[28px] opacity-25">01</span> PICK YOUR DESTINATION</p>
            <Destinations
                activeDestination={activeDestination}
                setActiveDestination={setActiveDestination}
                image={image}
                destination={destination}
                description={description}
                distance={distance}
                travelTime={travelTime}
            />


        </div>
    )
}

export default Destination
