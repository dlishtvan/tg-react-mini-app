import {createSlice} from '@reduxjs/toolkit';
import {fetchUsers, fetchUserById, addUser, updateUser} from './userAPI';
import STATUSES from '../../configs/statuses';
const tg = window.Telegram.WebApp;

const userSlice = createSlice({
  name: 'users',
  initialState: {
    dataTG: tg.initDataUnsafe?.user || {
      id: 'testuser',
      username: 'testuser',
    },
    data: {},
    list: [],
    status: STATUSES.IDLE,
    error: null,
    isLoading: true,
  },
  reducers: {
    incrementTotalScores: (state, {payload}) => {
      state.data.totalScores += payload;
    },
    incrementLevelScores: (state, {payload}) => {
      state.data.level.scores += payload;
    },
    incrementNeveLevel: (state) => {
      state.data.level.current += 1;
    },
    resetLevelScores: (state) => {
      state.data.level.scores = 0;
    },
  },
  extraReducers: (builder) => {
    builder
        // fetchUsers
        .addCase(fetchUsers.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;
          state.list = Object.values(action.payload).sort((a, b) => b.totalScores - a.totalScores);
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        })

        // fetchUserById
        .addCase(fetchUserById.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;

          if (action.payload) {
            state.data = action.payload;
          }
        })
        .addCase(fetchUserById.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        })

        // addUser
        .addCase(addUser.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(addUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;
          state.data = action.payload;
        })
        .addCase(addUser.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        })

        // updateUser
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;
          state.data = action.payload;
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        });
  },
});

export const {
  incrementTotalScores,
  incrementLevelScores,
  incrementNeveLevel,
  resetLevelScores,
} = userSlice.actions;

export default userSlice.reducer;
