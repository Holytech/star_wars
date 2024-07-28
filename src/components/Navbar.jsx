import { BsBell } from "react-icons/bs";
import { PiDotsThreeBold } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ details }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex ${
          details ? "justify-between" : "justify-end"
        } justify-end py-4 px-8 gap-8 items-center`}
      >
        {details && (
          <button
            className="flex items-center gap-2 text-[#A4A7B7]"
            onClick={() => navigate(-1)}
          >
            <RiArrowLeftSLine />
            <span>Back</span>
          </button>
        )}
        <div className="flex gap-8 items-center">
          <BsBell className="text-[#333758] text-xl cursor-pointer" />
          <span className="text-[#E5E5E5]">|</span>
          <div className="flex gap-4 items-center cursor-pointer">
            <img src="/account.svg" alt="user" />
            <p className="text-[#303B54]">John Doe</p>
          </div>
          <PiDotsThreeBold className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  details: PropTypes.bool,
};

export default Navbar;
