import React from "react";
import HeaderContainer from "../components/common/HeaderContainer";
import PostViewer from "../components/post/PostViewer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
