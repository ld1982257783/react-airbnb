// import PropTypes from "prop-types";
import React, { memo } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import { useState } from "react";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItem, setSelectItem] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItem];
    if (newItems.includes(item)) {
      newItems.splice(
        newItems.findIndex((value) => value === item),
        1
      );
    } else {
      newItems.push(item);
    }
    setSelectItem(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItem.includes(item),
              })}
              onClick={(e) => itemClickHandle(item)}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

// EntireFilter.propTypes = {};

export default EntireFilter;
