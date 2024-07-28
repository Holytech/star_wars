import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

const FilmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    updateFilms: (state, action) => {
      state.films = action.payload;
    },
  },
});

export default FilmSlice.reducer;
export const { updateFilms } = FilmSlice.actions;
