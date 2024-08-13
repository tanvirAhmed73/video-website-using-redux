import Pagination from "../components/Pagination/Pagination";
import Tags from "../components/Tags/Tags";
import VideoGrid from "../components/videoGrid/VideoGrid";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
