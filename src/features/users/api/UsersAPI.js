import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const {REACT_APP_FIREBASE_URL} = process.env;

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${REACT_APP_FIREBASE_URL}`}),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users.json',
    }),
    getUserByUsername: builder.query({
      query: (username) => `users/${username}.json`,
    }),
    addUser: builder.mutation({
      query: ({username, body}) => ({
        url: `${REACT_APP_FIREBASE_URL}/users/${username}.json`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      }),
    }),
    updateUser: builder.mutation({
      query: ({username, body}) => ({
        url: `${REACT_APP_FIREBASE_URL}/users/${username}.json`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const {useGetUsersQuery, useGetUserByUsernameQuery, useAddUserMutation, useUpdateUserMutation} = usersAPI;
