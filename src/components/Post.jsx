import "../styles/components/_post.scss";

import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";

import icon_time from "../assets/icon-time.svg";
import icon_favorite_border from "../assets/icon-favorite-border.svg";
import icon_favorite_fill from "../assets/icon-favorite-fill.svg";

const Post = ({
  author,
  story_title,
  story_url,
  created_at,
  story_id,
  objectID,
}) => {
  const { favs, addPostsToFavs, removePostsFromFavs } =
    useContext(PostsContext);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const state = favs.find((fav) => fav.story_id === story_id);
    setIsFav(state);
  }, []);

  const handleChangeFavs = (story_id) => {
    isFav
      ? (removePostsFromFavs(story_id), setIsFav(false))
      : (addPostsToFavs({
          author,
          story_title,
          story_url,
          created_at,
          story_id,
          objectID,
        }),
        setIsFav(true));
  };

  return (
    <article className="post">
      <a
        target="_blank"
        href={story_url ? story_url : "#"}
        className="post-info"
      >
        <small className="d-flex align-items-center">
          <figure className="d-inline-flex me-2">
            <img src={icon_time} alt="icon time" />
          </figure>
          <time>
            {created_at} {author}
          </time>
        </small>
        <p>{story_title}</p>
      </a>
      <button className="post-icon" onClick={() => handleChangeFavs(story_id)}>
        <figure>
          {isFav ? (
            <img src={icon_favorite_fill} alt="icon favorite" />
          ) : (
            <img src={icon_favorite_border} alt="icon favorite" />
          )}
        </figure>
      </button>
    </article>
  );
};

export default Post;
