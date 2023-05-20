import Indicator from "@/base-ui/indicator";
// import PropTypes from "prop-types";
import React, { memo } from "react";
import { DemoWrapper } from "./style";
import { useState } from "react";

const Demo = memo((props) => {
  const names = ["abc", "cba", "sss", "aaa", "sda", "fsd", "ddd", "kkk"];
  const [selectIndex, setSelectIndex] = useState(0);

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    // 1 越界判断   
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    // 2 如何计算滚动距离  滚动距离 = 当前item的中心位置offsetLeft - Indicator.width * 0.5 
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

// Demo.propTypes = {};

export default Demo;
