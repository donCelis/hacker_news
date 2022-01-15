import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [currentSelect, setCurrentSelect] = useState("");
  const [favs, setFavs] = useState([]);

  const addPostsToFavs = (post) => {
    setFavs((state) => {
      const newArr = [...state, post];
      localStorage.hackerNewsFavs = JSON.stringify(newArr);
      return newArr;
    });
  };
  
  const removePostsFromFavs = (id) => {
    setFavs((state) => {
      const newArr = state.filter((post) => post.id !== id);
      localStorage.hackerNewsFavs = JSON.stringify(newArr);
      return newArr;
    });
  };

  const [dashboardPosts, setDashboardPosts] = useState([]);

  const addPostsToDashboard = (posts) => {
    const filterPosts = posts.filter(
      ({ story_title, story_url }) => story_title !== null && story_url !== null
    );

    setDashboardPosts((state) => {
      const newArr = [...state, ...filterPosts];
      return newArr;
    });
  };

  // Setting localstorage values at the beggining
  useEffect(() => {
    const currentSelect = localStorage.hackerNewsCurrentSelect;

    if (currentSelect) setCurrentSelect(currentSelect);
  }, []);

  const initialState = {
    currentSelect,
    setCurrentSelect,
    /* favs */
    favs,
    setFavs,
    addPostsToFavs,
    removePostsFromFavs,
    /* posts */
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard,
  };

  return (
    <PostsContext.Provider value={initialState}>
      {children}
    </PostsContext.Provider>
  );
};
