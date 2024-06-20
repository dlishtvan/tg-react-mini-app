import {createSlice} from '@reduxjs/toolkit';
import {addUser, fetchUserById, updateUser} from './userAPI';
const tg = window.Telegram.WebApp;

const userSlice = createSlice({
  name: 'users',
  initialState: {
    dataTG: tg.initDataUnsafe?.user || {
      id: 'testuser',
      username: 'testuser',
    },
    data: {},
    status: 'idle',
    error: null,
    isLoading: true,
  },
  reducers: {
    incrementScores: (state, {payload}) => {
      state.data.scores += payload;
    },
  },
  extraReducers: (builder) => {
    builder
        // fetchUserById
        .addCase(fetchUserById.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
          state.isLoading = false;

          if (action.payload) {
            state.data = action.payload;
          }
        })
        .addCase(fetchUserById.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })

        // addUser
        .addCase(addUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(addUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        .addCase(addUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })

        // updateUser
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
  },
});

export const {incrementScores} = userSlice.actions;

export default userSlice.reducer;
