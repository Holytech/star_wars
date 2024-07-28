import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starships: [],
};

const StarshipSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    updateStarship: (state, action) => {
      state.starships = action.payload;
    },
  },
});

export default StarshipSlice.reducer;
export const { updateStarship } = StarshipSlice.actions;
