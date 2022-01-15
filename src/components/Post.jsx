import "../styles/components/_post.scss";

import icon_time from "../assets/icon-time.svg";
import icon_favorite_border from "../assets/icon-favorite-border.svg";

const Post = () => {
  return (
    <article className="post">
      <section className="post-info">
        <span className="d-flex align-items-center">
          <figure className="d-inline-flex me-2">
            <img src={icon_time} alt="icon time" />
          </figure>
          <time>3 hours ago by author</time>
        </span>
        <p>
          Yes, React is taking over front-end development. The question is why.
        </p>
      </section>
      <aside className="post-icon">
        <figure>
          <img src={icon_favorite_border} alt="icon favorite" />
        </figure>
      </aside>
    </article>
  );
};

export default Post;
