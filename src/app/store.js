import { configureStore } from "@reduxjs/toolkit";
import FilmSlice from "../features/FilmSlice";
import StarshipSlice from "../features/StarshipSlice";
import PeopleSlice from "../features/PeopleSlice";
import SpeciesSlice from "../features/SpeciesSlice";

const store = configureStore({
  reducer: {
    films: FilmSlice,
    starships: StarshipSlice,
    people: PeopleSlice,
    species: SpeciesSlice,
  },
});

export default store;
