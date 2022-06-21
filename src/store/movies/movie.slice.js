import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  original: null,
  trending: null,
  new: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { payload } = action;
      console.log(payload[2].movies);
      //   state.recommend = payload[2].movies;
      //   state.original = payload[1].movies;
      //   state.trending = payload[3].movies;
      //   state.new = payload[0].movies;

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

export const selectRecommended = (state) => state.movie.recommend ? state.movie.recommend : null;
export const selectOriginals = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectNew = (state) => state.movie.new;
