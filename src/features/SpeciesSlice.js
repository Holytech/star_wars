import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  species: [],
};

const SpeciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    updateSpecies: (state, action) => {
      state.species = action.payload;
    },
  },
});

export default SpeciesSlice.reducer;
export const { updateSpecies } = SpeciesSlice.actions;
