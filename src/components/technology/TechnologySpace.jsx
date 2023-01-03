import classNames from "classnames";

function TechnologySpace({ index, activeTech, setActiveTech, terminology }) {
  const setActiveTechnology = () => {
    setActiveTech(terminology);
  };

  const technologyClass = classNames(
    "text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8",
    {
      "text-black bg-white": activeTech === terminology,
    }
  );

  return (
    <button
      onClick={setActiveTechnology}
      type="button"
      className={technologyClass}
    >
      {" "}
      {index}
    </button>
  );
}

export default TechnologySpace;
