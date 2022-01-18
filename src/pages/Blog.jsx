import { useEffect, useState, useContext, lazy, Suspense, useRef } from "react";
import { PostsContext } from "../context/PostsContext";
import { getPosts } from "../services/getPosts";
import Loading from "../components/Loading";
import CustomSelect from "../components/Select";
//import Post from "../components/Post";

import useIntersection from "../hooks/useIntersection";

const Post = lazy(() => import("../components/Post"));

const Blog = () => {
  //context
  const {
    currentSelect,
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard,
  } = useContext(PostsContext);

  //First fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect.value);
      addPostsToDashboard(hits);
    };
    if (dashboardPosts.length === 0) fetchPosts();
  }, []);

  //Update fetch number per page
  const [numberPage, setNumberPage] = useState(0);
  const [oldNumberPage, setOldNumberpage] = useState(numberPage);
  const refLoading = useRef(null);
  const intersectionOptions = {
    cb: () => setNumberPage((oldNumber) => oldNumber + 1),
    options: {
      threshold: 1,
      rootMargin: "12px",
      root: null,
    },
  };
  const { isIntersecting } = useIntersection(
    intersectionOptions,
    refLoading.current
  );

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(numberPage);
      const { hits } = await getPosts(currentSelect.value, numberPage);
      addPostsToDashboard(hits);
    };
    if (isIntersecting && oldNumberPage !== numberPage) {
      setOldNumberpage(numberPage);
      fetchPosts();
    }
  }, [numberPage, isIntersecting]);

  //Update select
  const [oldSelect, setOldSelect] = useState(currentSelect);

  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect.value);
      const filterPosts = hits.filter(
        ({ story_title }) => story_title !== null
      );
      setDashboardPosts(filterPosts);
    };
    if (oldSelect.value !== currentSelect.value) {
      setOldSelect(currentSelect);
      fetchPosts();
      setNumberPage(0);
    }
  }, [currentSelect]);

  return (
    <>
      <CustomSelect />
      <section className="blog py-5">
        <div className="container">
          <Suspense fallback={<Loading />}>
            <ul className="row gx-5 gy-4">
              {dashboardPosts.map((post, i) => (
                <li
                  key={`${post.objectID}_${post.author}_${i}`}
                  className="col-md-12 col-lg-6"
                >
                  <Post {...post} />
                </li>
              ))}
            </ul>
            <div ref={refLoading} style={{ height: "20px" }}>
              <Loading />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Blog;
