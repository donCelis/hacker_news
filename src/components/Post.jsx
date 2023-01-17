/* eslint-disable camelcase */
import '../styles/components/_post.scss'

import { useContext, useEffect, useState } from 'react'
import { PostsContext } from '../context/PostsContext'

import iconTime from '../assets/icon-time.svg'
import iconFavoriteBorder from '../assets/icon-favorite-border.svg'
import iconFavoriteFill from '../assets/icon-favorite-fill.svg'

import TimeAgo from '../tools/TimeAgo'

const Post = ({ ...props }) => {
  const { author, story_title, story_url, created_at, story_id } = props

  const compareCreatedAt = TimeAgo(created_at)

  // context
  const { favs, addPostsToFavs, removePostsFromFavs } =
    useContext(PostsContext)

  const [isFav, setIsFav] = useState(false)

  // verify state to fav
  useEffect(() => {
    const state = favs.find((fav) => fav.story_id === story_id)
    setIsFav(state)
  }, [])

  const handleChangeFavs = (story_id) => {
    if (isFav) {
      removePostsFromFavs(story_id)
      setIsFav(false)
    } else {
      addPostsToFavs(props)
      setIsFav(true)
    }
  }

  return (
    <article className='post'>
      <a
        target='_blank'
        href={story_url || '#'}
        className='post-info' rel='noreferrer'
      >
        <small className='d-flex align-items-center'>
          <figure className='d-inline-flex me-2'>
            <img src={iconTime} alt='icon time' />
          </figure>
          <time dateTime={created_at}>
            {compareCreatedAt} by {author}
          </time>
        </small>
        <p>{story_title}</p>
      </a>
      <button className='post-icon' onClick={() => handleChangeFavs(story_id)}>
        <figure>
          <img
            src={isFav ? iconFavoriteFill : iconFavoriteBorder}
            alt='icon favorite'
          />
        </figure>
      </button>
    </article>
  )
}

export default Post
