import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      const { payload } = action;
      state.currentUser = payload;
    },

    signOutSuccess: (state) => initialState,
  },
});

export const { signInSuccess,signOutSuccess } = UserSlice.actions;

export default UserSlice.reducer;

export const selectUserDetails = (state) => state.user.currentUser;
export const selectUserPhoto = (state) =>
  state.user.currentUser ? state.user.currentUser.photoURL : null;
export const selectUserDisplayName = (state) =>
  state.user.currentUser ? state.user.currentUser.displayName : null;
