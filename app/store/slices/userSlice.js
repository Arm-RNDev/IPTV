import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainData: {},
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.mainData = action.payload;
    },
    resetUserData: (state, action) => {
      state.mainData = {};
    },
  },
});


export const {setUserData,resetUserData}=userSlice.actions
export const selectUserInfo=state=>state.userInfo

export default userSlice.reducer