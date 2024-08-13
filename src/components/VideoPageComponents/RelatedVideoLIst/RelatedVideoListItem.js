import videoCoverPIcture from "../../../assets/videoCoverPicture.png";

export default function RelatedVideoListItem() {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <a href="/">
          <img
            className="w-full h-full object-cover"
            src={videoCoverPIcture}
            alt="Shono Mohajon"
          />
        </a>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py-[2px]">
          3:28
        </p>
      </div>
      <div className="flex flex-col ">
        <a href="/">
          <p className="text-slate-900 text-sm font-semibold">Shono Mohajon</p>
        </a>
        <a href="/" className="text-gray-400 text-xs  hover:text-gray-600">
          SHUNNO
        </a>
        <p className="text-gray-400 text-xs mt-1">672K views . 4 years ago</p>
      </div>
    </div>
  );
}
