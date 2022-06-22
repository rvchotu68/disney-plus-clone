import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  original: [],
  trending: [],
  new: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { payload } = action;
      return {
        recommend: [...payload[2].movies],
        original: [...payload[1].movies],
        trending: [...payload[3].movies],
        new: [...payload[0].movies],
      };
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;

export const selectRecommended = (state) => state.movie.recommend;
export const selectOriginals = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectNew = (state) => state.movie.new;
