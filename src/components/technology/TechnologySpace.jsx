import classNames from "classnames";

function TechnologySpace({ techIndex, activeTech, setActiveTech, name }) {
  const setActiveTechnology = () => {
    setActiveTech(name);
  };

  const technologyClass = classNames(
    "text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8",
    {
      "text-black bg-white": activeTech === name,
    }
  );

  return (
    <button
      onClick={setActiveTechnology}
      type="button"
      className={technologyClass}
    >
      {" "}
      {techIndex}
    </button>
  );
}

export default TechnologySpace;
