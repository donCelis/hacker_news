import { useEffect, useState, useContext, lazy, Suspense } from "react";
import { PostsContext } from "../context/PostsContext";
import { getPosts } from "../services/getPosts";
import Loading from "../components/Loading";
import Select from "../components/Select";

const Post = lazy(() => import("../components/Post"));

const Blog = () => {
  //context
  const {
    currentSelect,
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard,
  } = useContext(PostsContext);

  const [numberPage, setNumberPage] = useState(0);

  //First fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect);
      addPostsToDashboard(hits);
    };
    if (dashboardPosts.length === 0) fetchPosts();
  }, []);

  //Update fetch number per page
  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect, numberPage);
      addPostsToDashboard(hits);
    };
    if (numberPage !== 0) fetchPosts();
  }, [numberPage]);

  //Update select
  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect);
      const filterPosts = hits.filter(
        ({ story_title }) => story_title !== null
      );
      setDashboardPosts(filterPosts);
    };
    if (currentSelect !== "") fetchPosts();
  }, [currentSelect]);

  return (
    <>
      <Select />
      <section className="blog py-5">
        <div className="container">
          <Suspense fallback={<Loading />}>
            <ul className="row gx-5 gy-4">
              {dashboardPosts.map((post) => (
                <li key={post.objectID} className="col-md-12 col-lg-6">
                  <Post {...post} />
                </li>
              ))}
            </ul>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Blog;
