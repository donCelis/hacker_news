import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

import Post from "../components/Post";

function Favs() {
  const { favs } = useContext(PostsContext);

  return (
    <section className="favs py-5">
      <div className="container">
        <ul className="row gx-5 gy-4">
          {favs.length === 0 ? (
            <li>No hay Favs</li>
          ) : (
            favs.map((item) => (
              <li key={item.objectID} className="col-md-12 col-lg-6">
                <Post {...item} />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default Favs;
