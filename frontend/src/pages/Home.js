import React, { useState, useContext } from "react";
import PageLayout from "../components/PageLayout";
import { Skeleton, Switch, Card, Avatar } from "antd";
import "./home.css";
import { GET_POSTS_QUERY } from "../graphql/queries";
import { Query } from "react-apollo";
import Posts from "./Posts";


const Home = () => {
  return (
    <PageLayout>
      <br />
      <br />
      <div className=" py-5">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <ul className="timeline">
              <Query
                query={GET_POSTS_QUERY}
              >
                {({ data, loading, error, refetch }) => {
                  if (loading) return <div className=""></div>;
                  if (error) return <div className=""></div>;
                  const posts = data.posts.edges
                  return <Posts posts={posts} />;
                }}
              </Query>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
