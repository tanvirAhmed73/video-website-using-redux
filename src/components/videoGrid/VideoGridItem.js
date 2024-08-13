import videoCoverPIcture from "../../assets/videoCoverPicture.png";

export default function VideoGridItem({ video = {} }) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <a href={`/video/${video.id}`}>
        <div className="w-full flex flex-col">
          {/* video image and duration */}
          <div className="relative">
            <a href={`/video/${video.id}`}>
              <img src={videoCoverPIcture} alt="videoCoverPIcture" />
            </a>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py-1">
              12:10
            </p>
          </div>

          {/* video title, views and date */}
          <div className="flex flex-row mt-2 gap-2">
            <div className="flex flex-col">
              <p className="text-slate-900 text-sm font-semibold">
                {video.title}
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            {video.views} views. {video.uploadingMonth} 3, {video.uploadingYear}
          </p>
        </div>
      </a>
    </div>
  );
}
