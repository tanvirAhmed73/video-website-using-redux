import React from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideos() {
  return (
    <div className="col-span-full lg:col-auto max-h-[570] overflow-y-auto">
      <RelatedVideoListItem />
    </div>
  );
}
