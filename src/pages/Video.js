import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideos from "../components/VideoPageComponents/RelatedVideoLIst/RelatedVideos";
import VideoDescription from "../components/VideoPageComponents/VideoDescription";
import VideoPlayer from "../components/VideoPageComponents/VideoPlayer";
import { fetchSingleVideo } from "../redux/features/singleVideo/singleVideoSlice";

export default function Video() {
  const { isLoading, singleVideo, isError, error } = useSelector(
    (state) => state.singleVideo
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchSingleVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <div className="col-span-12"> Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12"> {error}</div>;
  if (!isLoading && !isError && !singleVideo?.id) {
    content = <div className="col-span-12"> Videos Not Found</div>;
  }
  if (!isLoading && !isError && singleVideo?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer title={singleVideo.title} />

          <VideoDescription singleVideo={singleVideo} />
        </div>

        <RelatedVideos />
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
}
