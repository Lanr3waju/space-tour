import { useState } from "react";
import Nav from "../components/navBar/Nav";
import Technologies from "../components/technology/Technologies";
import data from "../components/technology/technologyData";

function Technology() {
  const [activeTech, setActiveTech] = useState("launch vehicle");
  const crewData = data.find(({ name }) => name === activeTech);
  const { image, name, description } = crewData;
  return (
    <div className="lg:bg-technology-desktop md:bg-technology-tablet sm:bg-technology-mobile bg-technology-mobile bg-no-repeat h-screen overflow-hidden bg-cover text-white">
      <Nav />
      <p className="text-2xl font-barlow mt-14 ml-28 tracking-[5px]">
        <span className="mr-[28px] opacity-25">03</span>SPACE LAUNCH 101
      </p>
      <Technologies
        activeTech={activeTech}
        setActiveTech={setActiveTech}
        image={image}
        name={name}
        description={description}
      />
    </div>
  );
}

export default Technology;
