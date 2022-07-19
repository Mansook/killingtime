import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostViewer from "../../components/post/PostViewer";
import loading, { selectLoading } from "../../modules/slices/loading";
import { readpost, selectPost, unloadpost } from "../../modules/slices/post";

const PostViewerContainer = () => {
  const postId = useParams().postId;
  const dispatch = useDispatch();
  const data = useSelector(selectPost);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(readpost(postId));
    return () => {
      dispatch(unloadpost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={data.post} loading={loading} error={data.error} />;
};

export default PostViewerContainer;
