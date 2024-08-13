import { configureStore } from "@reduxjs/toolkit";
import { singleVideoReducer } from "./features/singleVideo/singleVideoSlice";
import { tagReducer } from "./features/tags/tagSlice";
import { videoReducer } from "./features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer,
    singleVideo: singleVideoReducer,
  },
});
