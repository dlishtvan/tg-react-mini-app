import {configureStore} from '@reduxjs/toolkit';
import {scoresAPI} from '../features/scores/api/ScoresAPI';

export const store = configureStore({
  reducer: {
    [scoresAPI.reducerPath]: scoresAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoresAPI.middleware),
});

export default store;
