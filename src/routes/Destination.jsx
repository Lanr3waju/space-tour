import { useState } from "react";
import Nav from "../components/navBar/Nav";
import Destinations from "../components/destination/Destinations";
import { destenation } from "../components/destination/destinationData";

function Destination() {
  const [activeDestination, setActiveDestination] = useState("moon");
  const destinationData = destenation.find(
    ({ destination }) => destination === activeDestination
  );
  const { image, destination, description, distance, travelTime } =
    destinationData;

  const spaceDestinations = destenation.map(({ destination }) => destination);
  return (
    <div className="lg:bg-destination-desktop md:bg-destination-tablet sm:bg-destination-mobile bg-destination-mobile bg-no-repeat min-h-screen bg-cover text-white">
      <Nav />
      <p className="text-2xl font-barlow mt-14 ml-28 tracking-wide">
        <span className="mr-7 opacity-25">01</span> PICK YOUR DESTINATION
      </p>
      <Destinations
        activeDestination={activeDestination}
        setActiveDestination={setActiveDestination}
        image={image}
        destination={destination}
        description={description}
        spaceDestinations={spaceDestinations}
        distance={distance}
        travelTime={travelTime}
      />
    </div>
  );
}

export default Destination;
