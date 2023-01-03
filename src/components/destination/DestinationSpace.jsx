function DestinationSpace({
  destination,
  activeDestination,
  setActiveDestination,
}) {
  const activeDestinationStyle = {
    borderBottom: "2px solid white",
  };

  const setActive = () => {
    setActiveDestination(destination);
  };

  return (
    <button
      type="button"
      style={activeDestination === destination ? activeDestinationStyle : {}}
      onClick={setActive}
      className="cursor-pointer mr-[32px] hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 uppercase pb-2"
    >
      {destination}
    </button>
  );
}

export default DestinationSpace;
