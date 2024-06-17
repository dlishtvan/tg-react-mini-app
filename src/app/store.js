import {configureStore} from '@reduxjs/toolkit';
import {usersAPI} from '../features/users/api/UsersAPI';

export const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});

export default store;
