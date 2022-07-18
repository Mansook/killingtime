import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TagBox from "../../components/write/TagBox";
import { changefield, selectTag } from "../../modules/slices/write";

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(selectTag);
  const onChangeTags = (nextTags) => {
    dispatch(changefield({ key: "tags", value: nextTags }));
  };
  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
