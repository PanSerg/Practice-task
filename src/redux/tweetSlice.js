import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: { baseTweet: '' },
    reducers: {
        addBaseTweet(state, payload) {
            state.baseTweet = payload;
        },
    },

});

export const tweetReducer = tweetSlice.reducer;
export const { addBaseTweet } = tweetSlice.actions;