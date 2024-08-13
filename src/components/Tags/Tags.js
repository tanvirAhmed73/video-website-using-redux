import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/features/tags/tagSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();

  const { isLoading, tags, isError, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content;
  if (isLoading) content = <div className="col-span-12"> Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12"> {error}</div>;
  if (!isLoading && !isError && tags?.length === 0) {
    content = <div className="col-span-12"> Videos Not Found</div>;
  }
  if (!isLoading && !isError && tags?.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);
  }
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b">
        {content}
      </div>
    </section>
  );
};

export default Tags;
// overflow-y-scroll
