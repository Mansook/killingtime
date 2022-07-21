import React from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import HeaderContainer from "../components/common/HeaderContainer";
import PostList from "../components/post/PostList";
import PaginationContainaer from "../containers/posts/PaginationContainer";
import PostListContainer from "../containers/posts/PostListContainer";
const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainaer />
    </div>
  );
};

export default PostListPage;
