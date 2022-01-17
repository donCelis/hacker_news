import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import logo_react from "../assets/react-icon/image-140.png";

const Select = () => {
  const { currentSelect, setCurrentSelect } = useContext(PostsContext);

  //change select
  const handleSelect = (ev) => {
    let targetValue = ev.target.value;
    setCurrentSelect(targetValue);
    localStorage.hackerNewsCurrentSelect = targetValue;
  };

  //custom select
  const handleChangeSelect = (ev) => {
    console.log(ev);
    ev.target.nextSibling.classList.toggle("show");
  };

  return (
    <div className="container">
      <select onChange={handleSelect} value={currentSelect}>
        <option value="">Select your news</option>
        <option value="reactjs">ReacJs</option>
        <option value="angular">Angular</option>
        <option value="vuejs">VueJs</option>
      </select>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="customSelect"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleChangeSelect}
        >
          Select your news
        </button>

        <ul className="dropdown-menu" aria-labelledby="customSelect">
          <li className="dropdown-item">
            <img src={logo_react} alt="" />
            ReacJs
          </li>
          <li className="dropdown-item">
            <img src={logo_react} alt="" />
            Angular
          </li>
          <li className="dropdown-item">
            <img src={logo_react} alt="" />
            VueJs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
