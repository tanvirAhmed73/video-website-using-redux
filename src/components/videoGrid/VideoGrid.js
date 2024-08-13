import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content;
  if (isLoading) content = <div className="col-span-12"> Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12"> {error}</div>;
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12"> Videos Not Found</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px">
          {/* single video */}
          {content}
        </div>

        {/* error section */}
        {/* <div className="col-span-12"> some error happened</div> */}
      </section>
    </section>
  );
}
