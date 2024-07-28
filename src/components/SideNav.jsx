import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SideNav = ({ default_path }) => {
  const [active, setActive] = useState(default_path);
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, []);
  return (
    <>
      <div className=" flex flex-col bg-clip-border bg-[#031434] text-gray-700 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 relative">
        <Link to="/dashboard" className="flex items-center ">
          <img
            src="/star_wars.png"
            alt="star_wars Logo"
            className="w-40 mx-auto"
          />
        </Link>
        <nav className="flex flex-col justify-between h-full min-w-[240px] p-2 font-sans text-lg font-normal text-white mt-5">
          <div className="flex flex-col gap-2">
            <Link
              to="/dashboard"
              role="button"
              tabIndex="0"
              className={`flex items-center gap-5 w-full py-3 px-8 rounded-lg text-start leading-tight transition-all outline-none ${
                active === "/dashboard"
                  ? "bg-[#0A74DC] text-white"
                  : "hover:border-blue-50 hover:border-2 font-semibold"
              }`}
            >
              <RiLayoutGridFill />
              Overview
            </Link>
            <div className="mt-20 flex flex-col w-full gap-5">
              <Link
                to="/starship"
                role="button"
                tabIndex="0"
                className={`flex items-center gap-5 w-full py-3 px-8 rounded-lg text-start leading-tight transition-all outline-none ${
                  active === "/starship"
                    ? "bg-[#0A74DC] text-white"
                    : "hover:border-blue-50 hover:border-2 font-semibold"
                }`}
              >
                <FaSquare className="text-[#A9C1FF]" />
                Starships
              </Link>
              <Link
                to="/people"
                role="button"
                tabIndex="0"
                className={`flex items-center gap-5 w-full py-3 px-8 rounded-lg text-start leading-tight transition-all outline-none ${
                  active === "/people"
                    ? "bg-[#0A74DC] text-white"
                    : "hover:border-blue-50 hover:border-2 font-semibold"
                }`}
              >
                <FaSquare className="text-[#FFA9EC]" />
                People
              </Link>
              <Link
                to="/species"
                role="button"
                tabIndex="0"
                className={`flex items-center gap-5 w-full py-3 px-8 rounded-lg text-start leading-tight transition-all outline-none ${
                  active === "/species"
                    ? "bg-[#0A74DC] text-white"
                    : "hover:border-blue-50 hover:border-2 font-semibold"
                }`}
              >
                <FaSquare className="text-[#FDFFA9]" />
                Species
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

SideNav.propTypes = {
  default_path: PropTypes.string,
};

export default SideNav;
