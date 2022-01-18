import { useEffect, useState, useContext, lazy, Suspense, useRef } from "react";
import { PostsContext } from "../context/PostsContext";

//fetching data
import { getPosts } from "../services/getPosts";

//Components
import Loading from "../components/Loading";
import CustomSelect from "../components/Select";
const Post = lazy(() => import("../components/Post"));

//hooks
import useIntersection from "../hooks/useIntersection";

const Blog = () => {
  //context
  const {
    currentSelect,
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard,
  } = useContext(PostsContext);

  //Infinite Scroll
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
      const { hits } = await getPosts(currentSelect.value, numberPage);
      addPostsToDashboard(hits);
      //console.log("infinite scroll");
      //console.log(numberPage);
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
      //console.log("update select");
    };
    if (oldSelect.value !== currentSelect.value) {
      setOldSelect(currentSelect);
      setNumberPage(0);
      fetchPosts();
    }
  }, [currentSelect]);

  return (
    <>
      <CustomSelect />
      <section className="blog py-5">
        <div className="container">
          <Suspense fallback={<Loading />}>
            <ul className="row gx-0 gx-lg-5 gy-4">
              {dashboardPosts.map((post, i) => (
                <li
                  key={`${post.objectID}_${post.author}_${i}`}
                  className="col-md-12 col-lg-6"
                >
                  <Post {...post} />
                </li>
              ))}
            </ul>
            <div ref={refLoading} style={{ height: "32px" }}>
              <Loading />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Blog;
