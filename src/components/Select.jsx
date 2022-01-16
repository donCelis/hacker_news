import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const Select = () => {
  const { currentSelect, setCurrentSelect } = useContext(PostsContext);

  //change select
  const handleSelect = (ev) => {
    let targetValue = ev.target.value;
    setCurrentSelect(targetValue);
    localStorage.hackerNewsCurrentSelect = targetValue;
  };
  return (
    <div className="container">
      <select onChange={handleSelect} value={currentSelect}>
        <option value="">Select option</option>
        <option value="reactjs">ReacJs</option>
        <option value="angular">Angular</option>
        <option value="vuejs">VueJs</option>
      </select>
    </div>
  );
};

export default Select;
