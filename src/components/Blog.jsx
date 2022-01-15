import { useEffect, useState, useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { getPosts } from "../services/getPosts";
import Post from "./Post";

const Blog = () => {
  const {
    currentSelect,
    setCurrentSelect,
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard,
  } = useContext(PostsContext);

  const [numberPage, setNumberPage] = useState(0);

  //First fetch
  useEffect(() => {
    const data = async () => {
      const { hits } = await getPosts(currentSelect);
      addPostsToDashboard(hits);
    };
    data();
  }, []);

  //Update fetch
  useEffect(() => {
    const data = async () => {
      const { hits } = await getPosts(currentSelect, numberPage);
      addPostsToDashboard(hits);
    };
    if (numberPage !== 0) data();
  }, [numberPage]);

  //Update select
  useEffect(() => {
    const data = async () => {
      const { hits } = await getPosts(currentSelect);
      const filterPosts = hits.filter(
        ({ story_title, story_url }) =>
          story_title !== null && story_url !== null
      );
      setDashboardPosts(filterPosts);
    };
    if (currentSelect !== "") data();
  }, [currentSelect]);

  return (
    <section className="blog py-5">
      <div className="container">
        <ul className="row gx-5 gy-4">
          {dashboardPosts.map((item, key) => (
            <li key={key} className="col-md-12 col-lg-6">
              <Post {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
