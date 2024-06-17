import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const {REACT_APP_FIREBASE_URL} = process.env;

export const scoresAPI = createApi({
  reducerPath: 'scoresAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${REACT_APP_FIREBASE_URL}`}),
  endpoints: (builder) => ({
    getScores: builder.query({
      query: () => 'data.json',
    }),
  }),
});

export const {useGetScoresQuery} = scoresAPI;
