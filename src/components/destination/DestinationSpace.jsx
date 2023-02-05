import classNames from "classnames";
function DestinationSpace({
  destination,
  activeDestination,
  setActiveDestination,
}) {
  const destinationClass = classNames(
    "cursor-pointer mr-8 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 uppercase pb-2",
    {
      "border-white border-opacity-100": activeDestination === destination,
    }
  );
  const setActive = () => {
    setActiveDestination(destination);
  };

  return (
    <button type="button" onClick={setActive} className={destinationClass}>
      {destination}
    </button>
  );
}

export default DestinationSpace;
