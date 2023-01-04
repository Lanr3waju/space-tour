import DestinationSpace from "./DestinationSpace";

function Destinations(props) {

  const {
    activeDestination,
    setActiveDestination,
    image,
    destination,
    description,
    distance,
    travelTime,
    spaceDestinations
  } = props;

  const DestinationSpaceEl = spaceDestinations.map((destinations) => (
    <DestinationSpace
      key={destinations}
      destination={destinations}
      activeDestination={activeDestination}
      setActiveDestination={setActiveDestination}
    />
  ));

  return (
    <div className="flex  p-4">
      <img
        className="h-80 w-80 ml ml-52 mt-16 animate-spin-v-slow"
        src={image}
        alt="Planet"
      />

      <section className="w-80 ml-64 mt-2">
        <nav className="font-barlow w-3/4 text-base text-light  mb-7 flex justify-left">
          <div className="flex justify-between w-[100%]">
            {DestinationSpaceEl}
          </div>
        </nav>
        <div className="font-bellefair uppercase text-7xl">{destination}</div>
        <p className="text-justify font-barlow text-light leading-8 mt-4 mb-12">
          {description}
        </p>
        <div className="h-[1px] bg-[#383B4B] mb-4" />
        <ul className="flex justify-between w-[100%]">
          <li className="font-bellefair text-2xl">
            <span className="block text-[#D0D6F9] text-sm mb-3 font-barlow">
              AVG. DISTANCE
            </span>
            {distance}
          </li>
          <li className="font-bellefair text-2xl">
            <span className="block text-[#D0D6F9] text-sm mb-3 font-barlow">
              EST. TRAVEL TIME
            </span>
            {travelTime}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Destinations;
