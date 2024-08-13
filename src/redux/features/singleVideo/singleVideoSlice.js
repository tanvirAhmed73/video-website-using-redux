import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleApi } from "./singleVIdeoApi";

const initialState = {
  isLoading: false,
  singleVideo: {},
  isError: false,
  error: "",
};

export const fetchSingleVideo = createAsyncThunk(
  "singleVideo/fetchSingleVideo",
  async (id) => {
    const singleVideoData = singleApi(id);
    return singleVideoData;
  }
);
const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleVideo = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.singleVideo = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export const singleVideoReducer = singleVideoSlice.reducer;
