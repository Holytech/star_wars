import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useSelector } from "react-redux";

const FilmDetails = () => {
  const { id } = useParams();
  const film = useSelector((state) => state.films.films[id]);
  return (
    <>
      <div className="w-full flex">
        <SideNav />
        <div className="w-full h-screen overflow-scroll">
          <Navbar details={true} />
          <div className="w-full p-10 flex gap-5">
            <img
              src="/film_cover.png"
              alt=""
              className="max-w-[400px] h-[500px] object-cover object-center"
            />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl">{film.title}</h1>
              <p className="text-[#303B54]">Director: {film.director}</p>
              <p className="text-[#303B54]">Producer: {film.producer}</p>
              <p className="text-[#303B54]">
                Release Date: {film.release_date}
              </p>
              <div className="mt-5">
                <p className="text-[#303B54] font-bold mb-2">Opening Crawl</p>
                <p className="text-[#303B54]">{film.opening_crawl}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
