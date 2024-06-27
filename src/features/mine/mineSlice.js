import {createSlice} from '@reduxjs/toolkit';
import {fetchBrands, addMine} from './mineAPI';
import STATUSES from '../../configs/statuses';

const mineSlice = createSlice({
  name: 'mine',
  initialState: {
    brands: {
      types: [],
    },
    status: STATUSES.IDLE,
    error: null,
    isLoading: true,
  },
  reducers: {
    // incrementScoresPerTap: (state, {payload}) => {
    //   state.data.scoresPerTap += payload;
    // },
    // decrementTotalScores: (state, {payload}) => {
    //   state.data.totalScores -= payload;
    // },
    // incrementTotalScores: (state, {payload}) => {
    //   state.data.totalScores += payload;
    // },
    // incrementLevelScores: (state, {payload}) => {
    //   state.data.level.scores += payload;
    // },
    // incrementNewLevel: (state) => {
    //   state.data.level.current += 1;
    // },
    // resetLevelScores: (state) => {
    //   state.data.level.scores = 0;
    // },
  },
  extraReducers: (builder) => {
    builder
        // fetchBrands
        .addCase(fetchBrands.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(fetchBrands.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;

          state.brands.types = Object.values(action.payload);
        })
        .addCase(fetchBrands.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        })

        // addMine
        .addCase(addMine.pending, (state) => {
          state.isLoading = true;
          state.status = STATUSES.PENDING;
          state.error = null;
        })
        .addCase(addMine.fulfilled, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.FULFILLED;
          state.list = action.payload;
          // state.list = Object.values(action.payload).sort((a, b) => b.totalScores - a.totalScores);
        })
        .addCase(addMine.rejected, (state, action) => {
          state.isLoading = false;
          state.status = STATUSES.REJECTED;
          state.error = action.error.message;
        });
  },
});

// export const {
//   incrementScoresPerTap,
//   decrementTotalScores,
//   incrementTotalScores,
//   incrementLevelScores,
//   incrementNewLevel,
//   resetLevelScores,
// } = mineSlice.actions;

export default mineSlice.reducer;
