import "../styles/components/_tabs.scss";

import Post from "./Post";

function App() {
  return (
    <main className="App">
      <section className="filter-tabs py-5">
        <div className="container">
          <nav className="d-flex justify-content-center">
            <a className="btn-tab active" href="#">
              All
            </a>
            <a className="btn-tab" href="#">
              My faves
            </a>
          </nav>
        </div>
      </section>
      <section className="blog py-5">
        <div className="container">
          <ul className="row gx-5 gy-4">
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
            <li className="col-md-12 col-lg-6">
              <Post />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
