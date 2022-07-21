import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButton";
import {
  selectOriginalPostId,
  selectWrite,
  updatepost,
  writepost,
} from "../../modules/slices/write";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectWrite);
  const postID = useSelector(selectOriginalPostId);

  const onPublish = () => {
    if (postID) {
      dispatch(
        updatepost({
          title: post.title,
          body: post.body,
          tags: post.tags,
          id: postID,
        })
      );
      return;
    }
    dispatch(
      writepost({
        title: post.title,
        body: post.body,
        tags: post.tags,
      })
    );
  };

  const onCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    if (post.post) {
      const id = post.post._id;
      const username = post.post.user.username;
      navigate(`/@${username}/${id}`);
    }
    if (post.postError) {
      console.log(post.postError);
    }
  }, [post]);

  return (
    <WriteActionButtons
      isEdit={!!postID}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default WriteActionButtonsContainer;
