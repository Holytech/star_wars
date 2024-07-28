import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateFilms } from "../features/FilmSlice";
import { Link } from "react-router-dom";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Dashboard = () => {
  // const storedFilm = useSelector((state) => state.films.films);
  const [films, setFilms] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/films/");
  const dispatch = useDispatch();
  const [nextBtn, setNextBtn] = useState(null);
  const [prevBtn, setPrevBtn] = useState(null);

  async function loadData(url) {
    try {
      let response = await axios.get(url);
      setNextBtn(response.data.next);
      setPrevBtn(response.data.previous);
      setFilms(response["data"]["results"]);
      dispatch(updateFilms(response["data"]["results"]));
    } catch (error) {
      console.log("ERROR >>>>> " + error);
    }
  }
  useEffect(() => {
    // if (storedFilm.length > 0) {
    //   setFilms(storedFilm);
    // } else {
    //   loadData();
    // }
    loadData(url);
  }, [url]);
  return (
    <>
      <div className="w-full flex">
        <SideNav default_path={"/dashboard"} />
        <div className="w-full h-screen overflow-scroll">
          <Navbar details={false} />
          <div className="w-full p-10">
            <div className="w-full flex items-center gap-14">
              <Card resource={"film"} content={"Films"} />
              <Card resource={"starship"} content={"Starship"} />
              <Card resource={"people"} content={"People"} />
              <Card resource={"specie"} content={"Species"} />
            </div>
            <div className="w-full">
              <p className="my-14 text-[#A4A7B7]">Films</p>
              <table className="w-full text-sm text-left rtl:text-right border-[1px] rounded-3xl">
                <thead className="text-xs text-[#A4A7B7] uppercase bg-[#a4a7b70a] border-b">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Film Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Release Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Director
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Producer
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Episode ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Character
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {films.length > 0 ? (
                    films.map((each, index) => (
                      <>
                        <tr
                          className="bg-white border-b text-[#667085]"
                          key={index}
                        >
                          <td className="px-6 py-4">
                            <input type="checkbox" name="" id={index} />
                          </td>
                          <td className="px-6 py-4">{each.title}</td>
                          <td className="px-6 py-4">{each.release_date}</td>
                          <td className="px-6 py-4">{each.director}</td>
                          <td className="px-6 py-4">{each.producer}</td>
                          <td className="px-6 py-4">{each.episode_id}</td>
                          <td className="px-6 py-4">{each.characters[0]}</td>
                          <td className="px-6 py-4">
                            <Link
                              to={`/filmdetails/${index.toString()}`}
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
      </div>
    </>
  );
};

export default Dashboard;
