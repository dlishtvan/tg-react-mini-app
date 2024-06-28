import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const {REACT_APP_FIREBASE_URL} = process.env;

const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${REACT_APP_FIREBASE_URL}/users.json`);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id, thunkAPI) => {
      try {
        const response = await axios.get(`${REACT_APP_FIREBASE_URL}/users/${id}.json`);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

const addUser = createAsyncThunk(
    'user/addUser',
    async ({id, payload}, thunkAPI) => {
      try {
        const response = await axios.put(`${REACT_APP_FIREBASE_URL}/users/${id}.json`, payload);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

const updateUser = createAsyncThunk(
    'user/updateUser',
    async (payload, thunkAPI) => {
      try {
        const {id} = thunkAPI.getState().user.dataTG;
        const currentStateData = thunkAPI.getState().user.data;
        const data = payload || currentStateData;

        const response = await axios.put(`${REACT_APP_FIREBASE_URL}/users/${id}.json`, data);
        const updatedStateData = thunkAPI.getState().user.data;

        // NOTE Check if the data has changed since the request was sent
        if (JSON.stringify(updatedStateData) !== JSON.stringify(data)) {
          // NOTE If changed, send a repeat PUT request
          await axios.put(`${REACT_APP_FIREBASE_URL}/users/${id}.json`, updatedStateData);

          return updatedStateData;
        }

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

export {fetchUsers, fetchUserById, addUser, updateUser};
