import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useSelector } from "react-redux";

const SpeciesDetails = () => {
  const { id } = useParams();
  const specie = useSelector((state) => state.species.species[id]);
  return (
    <>
      <div className="w-full flex">
        <SideNav />
        <div className="w-full h-screen overflow-scroll">
          <Navbar details={true} />
          <div className="w-full p-10 flex gap-5">
            <img
              src="/wookie.png"
              alt=""
              className="max-w-[400px] h-[500px] object-cover object-center"
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">{specie.name}</h1>
              <p className="text-[#303B54]">
                Classification: {specie.classification}
              </p>
              <p className="text-[#303B54]">
                Designation: {specie.designation}
              </p>
              <p className="text-[#303B54]">Language: {specie.language}</p>
              <p className="text-[#303B54]">Eye Colors: {specie.eye_colors}</p>
              <p className="text-[#303B54]">
                Hair Colors: {specie.hair_colors}
              </p>
              <p className="text-[#303B54]">
                Average Lifespan: {specie.average_lifespan}
              </p>
              <p className="text-[#303B54]">
                Average Height: {specie.average_height}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeciesDetails;
