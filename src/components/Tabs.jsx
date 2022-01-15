const Tabs = () => {
  return (
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
  );
};

export default Tabs;
