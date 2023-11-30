import React, { useState } from "react";
import Description from "./Description";
import classes from "./Autocomplete.module.css";

const Autocomplete = ({ options }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState("");

  if (!Array.isArray(options) || options.length === 0) {
    return <div>Invalid or empty data</div>;
  }

  const onChange = (e) => {
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveOption(0);
    setFilteredOptions(filteredOptions);
    setShowOptions(true);
    setUserInput(userInput);
  };

  const onClick = (e) => {
    setActiveOption(0);
    setFilteredOptions([]);
    setShowOptions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = "option-active";
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <>
      <Description />
      <div className={`${classes.searchContainer}`}>
        <div className={classes.search}>
          <input
            type="text"
            className={`${classes.searchBox}`}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className={classes.searchBtn} />
        </div>
        {optionList}
      </div>
    </>
  );
};
/*
Autocomplete.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
};
*/
export default Autocomplete;
