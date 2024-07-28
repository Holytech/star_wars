import { FaSquare } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ resource, content }) => {
  // const boxColor = {
  //   film: "#A9FFE0",
  //   starship: "#A9C1FF",
  //   people: "#FFA9EC",
  //   specie: "#FDFFA9",
  // };
  return (
    <>
      <div className="w-1/5 bg-white p-3 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#434854]">{content}</p>
          <FaSquare
            className={`${
              resource == "film"
                ? "text-[#A9FFE0]"
                : resource == "starship"
                ? "text-[#A9C1FF]"
                : resource == "people"
                ? "text-[#FFA9EC]"
                : "text-[#FDFFA9]"
            }  text-3xl`}
          />
          {}
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[#434854]">200</p>
          <p className=" text-xs text-[#00992B]">20 More than than yesterday</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  resource: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
