import classNames from "classnames";

function CrewSpace({ activeCrew, setActiveCrew, id }) {
  const handleActiveCrew = () => {
    setActiveCrew(id);
  };

  const crewClass = classNames(
    "w-4 h-4 m-2 rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white",
    {
      'opacity-100': activeCrew === id,
    });

  return (
    <button
      onClick={handleActiveCrew}
      type="button"
      className={crewClass}
    ></button>
  );
}

export default CrewSpace;
