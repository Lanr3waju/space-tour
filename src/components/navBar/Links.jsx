import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Links({ route, index }) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("home");

  const path = pathname.replace(/[^a-zA-Z ]/g, "");

  useEffect(() => {
    if (path) {
      setActive(path);
    }
  }, [path]);

  const activeNav = {
    borderBottom: "2px solid white",
  };

  return (
    <Link
      style={active === route ? activeNav : {}}
      to={`/${route}`}
      className="cursor-pointer pt-7 pb-7 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 uppercase"
    >
      <span className="font-bold mr-3 ml-1">{index}</span>
      {route}
    </Link>
  );
}

export default Links;
