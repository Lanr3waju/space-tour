function CrewSpace({ activeCrew, setActiveCrew, id }) {
  const handleActiveCrew = () => {
    setActiveCrew(id);
  };

  const activeCrewStyle = {
    opacity: "1",
  };

  return (
    <button
      onClick={handleActiveCrew}
      style={activeCrew === id ? activeCrewStyle : {}}
      type="button"
      className="w-4 h-4 m-2 animate-pulse rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white"
    ></button>
  );
}

export default CrewSpace;
