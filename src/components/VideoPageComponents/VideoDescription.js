import LikeUnlike from "./LikeUnlike";

export default function VideoDescription({ singleVideo }) {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {singleVideo.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 {singleVideo.uploadingMonth}{" "}
          {singleVideo.uploadingYear}
        </h2>
        {/* like and unlike option */}
        <LikeUnlike />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {singleVideo.description}
      </div>
    </div>
  );
}
