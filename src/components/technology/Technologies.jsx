import TechnologySpace from "./TechnologySpace";

function Technologies({ activeTech, setActiveTech, image, name, description, tech }) {

  const technologySpaceEl = tech.map((name) => (
    <TechnologySpace
      techIndex={tech.indexOf(name) + 1}
      name={name}
      key={name}
      activeTech={activeTech}
      setActiveTech={setActiveTech}
    />
  ));
  return (
    <div className="flex  p-4">
      <nav>
        <div className="ml-28 mt-16">{technologySpaceEl}</div>
      </nav>
      <section className="w-[500px] ml-28 mt-16">
        <h3 className="font-barlow opacity-50 mb-4 t text-base text-light tracking-[2.7px]">
          THE TERMINOLOGY...
        </h3>
        <h2 className="font-bellefair text-5xl uppercase">{name}</h2>
        <p className="max-w-md font-barlow text-light text-lg leading-8 mt-8 mb-12">
          {description}
        </p>
      </section>
      <img
        className="ml-32 w-[400px] -m-4 h-[450px] -mt-16"
        src={image}
        alt="Planet"
      />
    </div>
  );
}

export default Technologies;
