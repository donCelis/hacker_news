import { useEffect, useState, lazy, Suspense, useRef } from 'react'
import { useProvider } from '../context'

// fetching data
import { getPosts } from '../services/getPosts'

// Components
import Loading from '../components/Loading'
import CustomSelect from '../components/Select'

// hooks
import useIntersection from '../hooks/useIntersection'
const Post = lazy(() => import('../components/Post'))

const Blog = () => {
  // context
  const {
    currentSelect,
    dashboardPosts,
    setDashboardPosts,
    addPostsToDashboard
  } = useProvider()

  // Infinite Scroll
  const [numberPage, setNumberPage] = useState(0)
  const [oldNumberPage, setOldNumberpage] = useState(numberPage)
  const refLoading = useRef(null)
  const intersectionOptions = {
    cb: () => setNumberPage((oldNumber) => oldNumber + 1),
    options: {
      threshold: 1,
      rootMargin: '12px',
      root: null
    }
  }
  const { isIntersecting } = useIntersection(
    intersectionOptions,
    refLoading.current
  )

  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect.value, numberPage)
      addPostsToDashboard(hits)
    }
    if (isIntersecting && oldNumberPage !== numberPage) {
      setOldNumberpage(numberPage)
      fetchPosts()
    }
  }, [numberPage, isIntersecting])

  // Update select
  const [oldSelect, setOldSelect] = useState(currentSelect)

  useEffect(() => {
    const fetchPosts = async () => {
      const { hits } = await getPosts(currentSelect.value)
      const filterPosts = hits.filter(
        ({ story_title }) => story_title !== null // eslint-disable-line camelcase
      )
      setDashboardPosts(filterPosts)
    }
    if (oldSelect.value !== currentSelect.value) {
      setOldSelect(currentSelect)
      setNumberPage(0)
      fetchPosts()
    }
  }, [currentSelect])

  return (
    <>
      <CustomSelect />
      <section className='blog py-5'>
        <div className='container'>
          <Suspense fallback={<Loading />}>
            <ul className='row gx-0 gx-lg-5 gy-4'>
              {dashboardPosts.map((post, i) => (
                <li
                  key={`${post.objectID}_${post.author}_${i}`}
                  className='col-md-12 col-lg-6'
                >
                  <Post {...post} />
                </li>
              ))}
            </ul>
            <div ref={refLoading} style={{ height: '32px' }}>
              <Loading />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default Blog
