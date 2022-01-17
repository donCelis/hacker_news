import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import logo_react from "../assets/react-icon/image-140.png";

import Select from "react-select";

const CustomSelect = () => {
  const { currentSelect, setCurrentSelect } = useContext(PostsContext);
  //const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "reactjs", label: "React Js" },
    { value: "angular", label: "Angular" },
    { value: "vuejs", label: "Vue Js" },
  ];

  //change select
  const handleSelect = (ev) => {
    setCurrentSelect(ev);
    localStorage.hackerNewsCurrentSelect = JSON.stringify(ev);
  };

  return (
    <div className="container">
      <Select
        placeholder="Select your news"
        value={currentSelect}
        onChange={handleSelect}
        options={options}
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#1797ff",
            primary25: "#eaeaea",
          },
        })}
      />
    </div>
  );
};

export default CustomSelect;
