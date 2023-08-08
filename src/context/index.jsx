import { createContext, useState, useEffect, useContext } from 'react'

const PostsContext = createContext({})

export const ContextProvider = ({ children }) => {
  /* Select */
  const [currentSelect, setCurrentSelect] = useState('')

  /* Favs */
  const [favs, setFavs] = useState([])

  const addPostsToFavs = (post) => {
    setFavs((state) => {
      const newPostsFavs = [...state, post]
      window.localStorage.hackerNewsFavs = JSON.stringify(newPostsFavs)
      return newPostsFavs
    })
  }

  const removePostsFromFavs = (id) => {
    setFavs((state) => {
      const filterPost = state.filter((post) => post.story_id !== id)
      window.localStorage.hackerNewsFavs = JSON.stringify(filterPost)
      return filterPost
    })
  }

  /* Posts */
  const [dashboardPosts, setDashboardPosts] = useState([])

  const addPostsToDashboard = (posts) => {
    // eslint-disable-next-line camelcase
    const filterPosts = posts.filter(({ story_title }) => story_title !== null)

    setDashboardPosts((state) => {
      const finalPosts = [...state, ...filterPosts]
      return finalPosts
    })
  }

  // Setting localstorage values at the beggining
  useEffect(() => {
    const currentSelectCache = window.localStorage.hackerNewsCurrentSelect
    if (currentSelectCache) setCurrentSelect(JSON.parse(currentSelectCache))

    const currentFavs = window.localStorage.hackerNewsFavs
    if (currentFavs) setFavs(JSON.parse(currentFavs))
  }, [])

  const initialState = {
    /* select */
    currentSelect,
    setCurrentSelect,
    /* favs */
    favs,
    addPostsToFavs,
    removePostsFromFavs,
    /* posts */
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard
  }

  return (
    <PostsContext.Provider value={initialState}>
      {children}
    </PostsContext.Provider>
  )
}

export const useProvider = () => {
  const context = useContext(PostsContext)
  if (!context) {
    throw new Error('useMyContext debe ser usado dentro de un proveedor MyContext')
  }
  return context
}
