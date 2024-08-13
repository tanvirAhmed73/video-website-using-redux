export default function Tag({ tag }) {
  return (
    <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
      {tag.name}
    </div>
  );
}

/* selected */
// <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
//   redux
// </div>
