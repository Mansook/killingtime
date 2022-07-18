import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButton";
import { selectWrite, writepost } from "../../modules/slices/write";

const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectWrite);
  console.log(post.title);
  const onPublish = () => {
    dispatch(writepost(post.title, post.body, post.tags));
  };

  const onCancel = () => {
    navigate("/");
  };

  /*  useEffect(() => {
    if (post) {
      const { _id, user } = post;
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;*/
};

export default WriteActionButtonsContainer;
