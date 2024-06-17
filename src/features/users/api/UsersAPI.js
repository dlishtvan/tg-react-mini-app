import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const {REACT_APP_FIREBASE_URL} = process.env;

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${REACT_APP_FIREBASE_URL}`}),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users.json',
    }),
    getUserById: builder.query({
      query: (userName) => `users/${userName}.json`,
    }),
    addUser: builder.mutation({
      query: ({userName, body}) => ({
        url: `${REACT_APP_FIREBASE_URL}/users/${userName}.json`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const {useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation} = usersAPI;
