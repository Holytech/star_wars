import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

import { useDispatch, useSelector } from "react-redux";
import { updateSpecies } from "../features/SpeciesSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [nextBtn, setNextBtn] = useState(null);
  const [prevBtn, setPrevBtn] = useState(null);
  const [url, setUrl] = useState("https://swapi.dev/api/species");
  const dispatch = useDispatch();
  const loadData = async (url) => {
    try {
      let response = await axios.get(url);
      setNextBtn(response.data.next);
      setPrevBtn(response.data.previous);
      setSpecies(response["data"]["results"]);
      dispatch(updateSpecies(response["data"]["results"]));
    } catch (error) {
      console.log("ERROR >>>>> " + error);
    }
  };

  useEffect(() => {
    loadData(url);
  }, [url]);
  return (
    <>
      <div className="w-full flex">
        <SideNav default_path={"/species"} />
        <div className="w-full">
          <Navbar details={false} />
          <div className="w-full p-10">
            <p className="my-8 text-[#A4A7B7]">Species</p>
            <table className="w-full text-sm text-left rtl:text-right border-[1px] rounded-3xl">
              <thead className="text-xs text-[#A4A7B7] uppercase bg-[#a4a7b70a] border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Classification
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Eye Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hair Colour
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Height
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {species.length > 0 ? (
                  species.map((each, index) => (
                    <>
                      <tr
                        className="bg-white border-b text-[#667085]"
                        key={index}
                      >
                        <td className="px-6 py-4">
                          <input type="checkbox" name="" id={index} />
                        </td>
                        <td className="px-6 py-4">{each.name}</td>
                        <td className="px-6 py-4">{each.classification}</td>
                        <td className="px-6 py-4">{each.eye_colors}</td>
                        <td className="px-6 py-4">{each.hair_colors}</td>
                        <td className="px-6 py-4">
                          {each.average_height}{" "}
                          {each.average_height == "n/a" ? "" : "CM"}
                        </td>
                        <td className="px-6 py-4">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(each.created)
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            to={`/speciesdetails/${index.toString()}`}
                            className="text-[#0A74DC] text-xs underline underline-offset-2"
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))
                ) : (
                  <tr className="bg-white border-b text-[#667085]">
                    <td colSpan={8} className="px-6 py-4 text-center w-full">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="flex justify-center mt-4 gap-5">
              {prevBtn && (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setUrl(prevBtn)}
                >
                  <GrCaretPrevious />
                  <span>Previous</span>
                </div>
              )}
              {nextBtn && (
                <div
                  className="flex items-center gap-2 cursor-pointer self-end"
                  onClick={() => setUrl(nextBtn)}
                >
                  <span>Next</span>
                  <GrCaretNext />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Species;
