import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostActionButtons from "../../components/post/PostActtionButton";
import PostViewer from "../../components/post/PostViewer";
import loading, { selectLoading } from "../../modules/slices/loading";
import { readpost, selectPost, unloadpost } from "../../modules/slices/post";
import { selectUser } from "../../modules/slices/user";
import { setoriginalpost } from "../../modules/slices/write";

const PostViewerContainer = () => {
  const postId = useParams().postId;
  const dispatch = useDispatch();
  const data = useSelector(selectPost);

  const user = useSelector(selectUser).user;
  const post = useSelector(selectPost).post;
  const loading = useSelector(selectLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readpost(postId));

    return () => {
      dispatch(unloadpost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setoriginalpost(post));
    console.log("Tqkf");
    navigate("/write");
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
      post={data.post}
      loading={loading}
      error={data.error}
    />
  );
};

export default PostViewerContainer;
