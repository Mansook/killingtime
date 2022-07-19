import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/write/Editor";
import { selectPost } from "../../modules/slices/post";

import { changefield, initialize } from "../../modules/slices/write";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  const title = post.title;
  const body = post.body;

  const onChangeField = useCallback(
    (payload) => dispatch(changefield(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
