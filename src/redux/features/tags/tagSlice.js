import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagsApi } from "./tagsApi";

const initialState = {
  isLoading: false,
  tags: [],
  isError: false,
  error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchtags", async () => {
  const tags = await tagsApi();
  return tags;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.tags = [];
        state.error = action.error?.message;
      });
  },
});

export const tagReducer = tagSlice.reducer;
