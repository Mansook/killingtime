import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/post/PostList";
import { selectLoading } from "../../modules/slices/loading";
import { listposts, selectList } from "../../modules/slices/posts";
import { selectUser } from "../../modules/slices/user";
import qs from "qs";
import { useLocation } from "react-router-dom";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser).user;
  const { posts, error } = useSelector(selectList);
  const loading = useSelector(selectLoading);
  const location = useLocation();

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listposts(page));
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};
export default PostListContainer;
