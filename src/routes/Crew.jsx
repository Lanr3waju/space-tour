import { useState } from "react";
import Nav from "../components/navBar/Nav";
import Crews from "../components/crew/Crews";
import data from "../components/crew/crewData";

function Crew() {
  const [activeCrew, setActiveCrew] = useState("douglas hurley");
  const crewData = data.find(({ name }) => name === activeCrew);
  const { image, title, name, bio } = crewData;
  return (
    <div className="lg:bg-crew-desktop md:bg-crew-tablet sm:bg-crew-mobile bg-crew-mobile bg-no-repeat bg-cover text-white h-screen overflow-hidden">
      <Nav />
      <p className="text-2xl font-barlow mt-14 ml-28 tracking-[5px]">
        <span className="mr-[28px] opacity-25">02</span>MEET YOUR CREW
      </p>
      <Crews
        activeCrew={activeCrew}
        setActiveCrew={setActiveCrew}
        image={image}
        title={title}
        name={name}
        bio={bio}
      />
    </div>
  );
}

export default Crew;
