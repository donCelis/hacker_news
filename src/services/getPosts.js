export const getPosts = async (query = "", numberPage = 0) => {
  const URI = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${numberPage}&hitsPerPage=20`;
  const req = await fetch(URI);
  const res = await req.json();

  return res;
};
