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
        const data = payload || thunkAPI.getState().user.data;

        const response = await axios.put(`${REACT_APP_FIREBASE_URL}/users/${id}.json`, data);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

export {fetchUsers, fetchUserById, addUser, updateUser};
