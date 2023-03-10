import { useState } from "react";
import Nav from "../components/navBar/Nav";
import Technologies from "../components/technology/Technologies";
import { technology } from "../components/technology/technologyData";

function Technology() {
  const [activeTech, setActiveTech] = useState("launch vehicle");
  const crewData = technology.find(({ name }) => name === activeTech);
  const { image, name, description } = crewData;
  const tech = technology.map(({ name }) => name);
  return (
    <div className="lg:bg-technology-desktop md:bg-technology-tablet sm:bg-technology-mobile bg-technology-mobile bg-no-repeat min-h-screen bg-cover text-white">
      <Nav />
      <p className="text-2xl font-barlow mt-14 ml-28 tracking-wide">
        <span className="mr-7 opacity-25">03</span>SPACE LAUNCH 101
      </p>
      <Technologies
        activeTech={activeTech}
        setActiveTech={setActiveTech}
        image={image}
        name={name}
        tech={tech}
        description={description}
      />
    </div>
  );
}

export default Technology;
