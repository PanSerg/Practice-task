import { createSlice } from "@reduxjs/toolkit";
import { addTweet } from "./operations";

const tweetSlice = createSlice({
  name: 'tweet',
  initialState: { baseTweet: '' },
  reducers: {
    addBaseTweet(state, payload) {
      state.baseTweet = payload;
    },
        extraReducers: builder => builder
            .addCase(addTweet.fulfilled, (state, {payload}) => {
                state.baseTweet = payload;  
            }),
  },
});

export const tweetReducer = tweetSlice.reducer;
export const { addBaseTweet } = tweetSlice.actions;