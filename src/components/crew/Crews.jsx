import CrewSpace from "./CrewSpace";
function Destinations(props) {
  const { activeCrew, setActiveCrew, image, name, title, bio, spaceCrews } =
    props;

  const crewSpaceEl = spaceCrews.map((crew) => (
    <CrewSpace
      key={crew}
      id={crew}
      activeCrew={activeCrew}
      setActiveCrew={setActiveCrew}
    />
  ));
  return (
    <div className="flex  p-4">
      <section className="w-5/12 ml-28 mt-4">
        <h2 className="font-bellefair mt-12 opacity-50 mb-4 text-3xl uppercase">
          {title}
        </h2>
        <h2 className="font-bellefair text-5xl uppercase">{name}</h2>
        <p className="max-w-5/12 font-barlow text-light text-lg leading-8 mt-8 mb-12">
          {bio}
        </p>
        <div className="flex mt-3 w-[100%]">{crewSpaceEl}</div>
      </section>
      <img className="ml-52 w-4/12 -mt-24" src={image} alt="Planet" />
    </div>
  );
}

export default Destinations;
