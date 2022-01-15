import "../styles/components/_post.scss";

import icon_time from "../assets/icon-time.svg";
import icon_favorite_border from "../assets/icon-favorite-border.svg";

const Post = ({ author, story_title, story_url, created_at }) => {
  return (
    <article className="post">
      <a target="_blank" href={story_url} className="post-info">
        <span className="d-flex align-items-center">
          <figure className="d-inline-flex me-2">
            <img src={icon_time} alt="icon time" />
          </figure>
          <time>
            {created_at} {author}
          </time>
        </span>
        <p>{story_title}</p>
      </a>
      <button className="post-icon">
        <figure>
          <img src={icon_favorite_border} alt="icon favorite" />
        </figure>
      </button>
    </article>
  );
};

export default Post;
