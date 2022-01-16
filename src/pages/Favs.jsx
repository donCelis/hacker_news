import { useContext, lazy, Suspense } from "react";
import { PostsContext } from "../context/PostsContext";
import Loading from "../components/Loading";

const Post = lazy(() => import("../components/Post"));

function Favs() {
  //context
  const { favs } = useContext(PostsContext);

  return (
    <section className="favs py-5">
      <div className="container">
        <Suspense fallback={<Loading />}>
          <ul className="row gx-5 gy-4">
            {favs.length === 0 ? (
              <li className="text-center">
                <h5>don't have favorites news</h5>
              </li>
            ) : (
              favs.map((fav) => (
                <li key={fav.objectID} className="col-md-12 col-lg-6">
                  <Post {...fav} />
                </li>
              ))
            )}
          </ul>
        </Suspense>
      </div>
    </section>
  );
}

export default Favs;
