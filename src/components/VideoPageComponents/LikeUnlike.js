import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export default function LikeUnlike() {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex items-center gap-1">
        <AiOutlineLike className="shrink-0" />
        <span className="text-sm leading-[1.7142857] text-slate-600">100k</span>
      </div>
      <div className="flex items-center gap-1">
        <AiOutlineDislike className="shrink-0" />
        <span className="text-sm leading-[1.7142857] text-slate-600">100k</span>
      </div>
    </div>
  );
}
