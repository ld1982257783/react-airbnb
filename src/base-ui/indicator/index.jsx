import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { IndicatorWrapper } from "./style";
import { useEffect } from "react";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef();

  useEffect(() => {
    // console.log(selectIndex, "indicator");
    // 1 获取selectIndex 对应的item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 2 content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // console.log(itemLeft, itemWidth, contentWidth);
    // 3 获取selectIndex 要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // console.log(distance);
    if (distance < 0) distance = 0; // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance; // 右边的特殊情况处理
    // 4 改变位置
    contentRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
