import React from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import HeaderContainer from "../components/common/HeaderContainer";
import PostList from "../components/post/PostList";
const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostList />
    </div>
  );
};

export default PostListPage;
