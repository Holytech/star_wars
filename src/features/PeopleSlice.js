import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
};

const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updatePeople: (state, action) => {
      state.people = action.payload;
    },
  },
});

export default PeopleSlice.reducer;
export const { updatePeople } = PeopleSlice.actions;
