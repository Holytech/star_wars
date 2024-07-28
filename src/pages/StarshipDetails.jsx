import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const getPilotNames = async (pilotUrls) => {
  try {
    const responses = await Promise.all(pilotUrls.map((url) => axios.get(url)));
    const pilotNames = responses.map((response) => response.data.name);
    return pilotNames.join(", ");
  } catch (error) {
    console.error("Error fetching pilot data:", error);
    return "";
  }
};

const StarshipDetails = () => {
  const { id } = useParams();
  const starship = useSelector((state) => state.starships.starships[id]);
  const [pilotNames, setPilotNames] = useState("");

  useEffect(() => {
    const fetchPilotNames = async () => {
      if (starship.pilots.length > 0) {
        const names = await getPilotNames(starship.pilots);
        setPilotNames(names);
      } else {
        setPilotNames(""); // Handle case with no pilots
      }
    };

    fetchPilotNames();
  }, [starship.pilots]);
  return (
    <>
      <div className="w-full flex">
        <SideNav />
        <div className="w-full h-screen overflow-scroll">
          <Navbar details={true} />
          <div className="w-full p-10 flex gap-5">
            <img
              src="/star_ship.png"
              alt=""
              className="max-w-[400px] h-[500px] object-cover object-center"
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">{starship.name}</h1>
              <p className="text-[#303B54]">Model: {starship.model}</p>
              <p className="text-[#303B54]">
                Manufacturer: {starship.manufacturer}
              </p>
              <p className="text-[#303B54]">Class: {starship.starship_class}</p>
              <p className="text-[#303B54]">
                Max Atmosphering Speed: {starship.max_atmosphering_speed}
              </p>
              <p className="text-[#303B54]">
                Cargo Capacity: {starship.cargo_capacity}
              </p>
              <p className="text-[#303B54]">Crew: {starship.crew}</p>
              <p className="text-[#303B54]">
                Passengers: {starship.passengers}
              </p>
              {pilotNames ? (
                <p className="text-[#303B54]">Pilots: {pilotNames}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipDetails;
