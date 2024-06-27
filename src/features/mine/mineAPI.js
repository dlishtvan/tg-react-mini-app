import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const {REACT_APP_FIREBASE_URL} = process.env;

const fetchBrands = createAsyncThunk(
    'mine/fetchBrands',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`${REACT_APP_FIREBASE_URL}/mine/brands.json`);

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

const addMine = createAsyncThunk(
    'mine/addMine',
    async (_, thunkAPI) => {
      try {
        const response = await axios.put(`${REACT_APP_FIREBASE_URL}/mine/brands.json`, {
          linkedin: {
            id: 1,
            icon: 'linkedin',
            title: 'LinkedIn',
            perTap: 1,
            price: 100,
          },
          youtube: {
            id: 2,
            icon: 'youtube',
            title: 'YouTube',
            perTap: 2,
            price: 200,
          },
          apple: {
            id: 3,
            icon: 'apple',
            title: 'Apple',
            perTap: 3,
            price: 300,
          },
          x: {
            id: 4,
            icon: 'fa-square-x-twitter',
            title: 'X',
            perTap: 4,
            price: 400,
          },
          meta: {
            id: 4,
            icon: 'fa-meta',
            title: 'Meta',
            perTap: 4,
            price: 400,
          },
        });

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
);

export {fetchBrands, addMine};
