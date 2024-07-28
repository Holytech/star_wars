import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { updatePeople } from "../features/PeopleSlice";
import { Link } from "react-router-dom";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const People = () => {
  // const storedData = useSelector((state) => state.people.people);
  const [people, setPeople] = useState([]);
  const [nextBtn, setNextBtn] = useState(null);
  const [prevBtn, setPrevBtn] = useState(null);
  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      let response = await axios.get(url);
      setNextBtn(response.data.next);
      setPrevBtn(response.data.previous);
      setPeople(response["data"]["results"]);
      dispatch(updatePeople(response["data"]["results"]));
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
        <SideNav default_path={"/people"} />
        <div className="w-full">
          <Navbar details={false} />
          <div className="w-full p-10">
            <p className="my-8 text-[#A4A7B7]">People</p>
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
                    Birth Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
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
                {people.length > 0 ? (
                  people.map((each, index) => (
                    <>
                      <tr
                        className="bg-white border-b text-[#667085]"
                        key={index}
                      >
                        <td className="px-6 py-4">
                          <input type="checkbox" name="" id={index} />
                        </td>
                        <td className="px-6 py-4">{each.name}</td>
                        <td className="px-6 py-4">{each.birth_year}</td>
                        <td className="px-6 py-4">{each.gender}</td>
                        <td className="px-6 py-4">{each.hair_color}</td>
                        <td className="px-6 py-4">{each.height}</td>
                        <td className="px-6 py-4">
                          {new Intl.DateTimeFormat("en-US").format(
                            new Date(each.created)
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            to={`/peopledetails/${index.toString()}`}
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

export default People;
