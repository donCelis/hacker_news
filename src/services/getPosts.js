export const getPosts = async (query = 'web', numberPage = 0) => {
  try {
    const URI = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${numberPage}&hitsPerPage=8`
    const req = await fetch(URI) // eslint-disable-line no-undef
    const res = await req.json()
    return res
  } catch (error) {
    console.log(error)
  }
}
