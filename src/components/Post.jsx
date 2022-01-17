import "../styles/components/_post.scss";

import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";

import icon_time from "../assets/icon-time.svg";
import icon_favorite_border from "../assets/icon-favorite-border.svg";
import icon_favorite_fill from "../assets/icon-favorite-fill.svg";

import timeAgo from "../utils/timeAGo";

const Post = ({ ...props }) => {
  let { author, story_title, story_url, created_at, story_id } = props;

  //context
  const { favs, addPostsToFavs, removePostsFromFavs } =
    useContext(PostsContext);

  const [isFav, setIsFav] = useState(false);

  //verify state to fav
  useEffect(() => {
    const state = favs.find((fav) => fav.story_id === story_id);
    setIsFav(state);
  }, []);

  //fuction add like or remove like
  const handleChangeFavs = (story_id) => {
    isFav
      ? (removePostsFromFavs(story_id), setIsFav(false))
      : (addPostsToFavs(props), setIsFav(true));
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
          <time dateTime={created_at}>
            {timeAgo(created_at)} by {author}
          </time>
        </small>
        <p>{story_title}</p>
      </a>
      <button className="post-icon" onClick={() => handleChangeFavs(story_id)}>
        <figure>
          <img
            src={isFav ? icon_favorite_fill : icon_favorite_border}
            alt="icon favorite"
          />
        </figure>
      </button>
    </article>
  );
};

export default Post;
