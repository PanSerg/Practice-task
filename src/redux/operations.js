import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://643318b1d0127730d2e13330.mockapi.io';

export const addTweet = createAsyncThunk(
    'users/addContact',
    async (newUser, thunkAPI) => {
        try {
            const response = await axios.post('/users', newUser);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/users');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTweet = createAsyncThunk(
    'users/deleteTweet',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.delete(`/users/${userId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);