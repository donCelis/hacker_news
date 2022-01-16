import { NavLink } from "react-router-dom";

const Tabs = () => (
  <section className="filter-tabs py-5">
    <div className="container">
      <nav className="d-flex justify-content-center">
        <NavLink to="/" className="btn-tab">
          All
        </NavLink>
        <NavLink to="/favs" className="btn-tab">
          My faves
        </NavLink>
      </nav>
    </div>
  </section>
);

export default Tabs;
