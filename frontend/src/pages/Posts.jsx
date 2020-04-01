import React, { useState, useContext } from "react";
import "./home.css";
import Post from "./Post";

const Home = ({ posts }) => {
  let inner = (
    <>
      {posts.map(post => (
        <Post
          key={post.node.id}
          title={post.node.title}
          description={post.node.description}
          created_at={post.node.created_at}
          category={post.node.category.name}
          posted_by={post.node.postedBy.username}
          image={post.node.postImageUrl}
          likes={post.node.likesCount}
        />
      ))}
    </>
  );
  return <>{inner}</>;
};

export default Home;
