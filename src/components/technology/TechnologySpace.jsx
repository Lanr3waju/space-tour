function TechnologySpace({ index, activeTech, setActiveTech, terminology }) {
  const activeTechStyle = {
    color: "black",
    backgroundColor: "white",
  };

  const setActiveTechnology = () => {
    setActiveTech(terminology);
  };

  return (
    <button
      style={activeTech === terminology ? activeTechStyle : {}}
      onClick={setActiveTechnology}
      type="button"
      className="text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8"
    >
      {" "}
      {index}
    </button>
  );
}

export default TechnologySpace;
