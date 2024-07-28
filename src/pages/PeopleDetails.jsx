import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
  const { id } = useParams();
  const person = useSelector((state) => state.people.people[id]);

  return (
    <>
      <div className="w-full flex">
        <SideNav />
        <div className="w-full h-screen overflow-scroll">
          <Navbar details={true} />
          <div className="w-full p-10 flex gap-5">
            <img
              src="/shank.png"
              alt=""
              className="max-w-[400px] h-[500px] object-cover object-center"
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">{person.name}</h1>
              <p className="text-[#303B54]">Gender: {person.gender}</p>
              <p className="text-[#303B54]">
                Year of birth: {person.birth_year}
              </p>
              <p className="text-[#303B54]">Hair Color: {person.hair_color}</p>
              <p className="text-[#303B54]">Skin Color: {person.skin_color}</p>
              <p className="text-[#303B54]">Height: {person.height}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleDetails;
