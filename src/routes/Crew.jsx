import { useState } from "react";
import Nav from "../components/navBar/Nav";
import Crews from "../components/crew/Crews";
import { crew } from "../components/crew/crewData";

function Crew() {
  const [activeCrew, setActiveCrew] = useState("douglas hurley");
  const crewData = crew.find(({ name }) => name === activeCrew);
  const { image, title, name, bio } = crewData;
  const spaceCrews = crew.map(({ name }) => name)
  return (
    <div className="lg:bg-crew-desktop md:bg-crew-tablet sm:bg-crew-mobile bg-crew-mobile bg-no-repeat bg-cover text-white min-h-screen">
      <Nav />
      <p className="text-2xl font-barlow mt-14 ml-28 tracking-wide">
        <span className="mr-7 opacity-25">02</span>MEET YOUR CREW
      </p>
      <Crews
        activeCrew={activeCrew}
        setActiveCrew={setActiveCrew}
        image={image}
        title={title}
        name={name}
        bio={bio}
        spaceCrews={spaceCrews}
      />
    </div>
  );
}

export default Crew;
