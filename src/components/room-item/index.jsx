import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useRef } from "react";
import Indicator from "@/base-ui/indicator";
import { useState } from "react";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const slideRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  // 事件处理的逻辑
  function controlClickHandle(isRight = true, event) {
    isRight ? slideRef.current.next() : slideRef.current.prev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    // 1 越界判断
    if (newIndex < 0) newIndex = itemData?.picture_urls.length - 1;
    if (newIndex > itemData?.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    // 2 如何计算滚动距离  滚动距离 = 当前item的中心位置offsetLeft - Indicator.width * 0.5

    // 阻止事件冒泡 跳转detail页面
    event.stopPropagation();
  }

  function itemClickHandle() {
    if (itemClick) {
      itemClick(itemData);
    }
  }

  /** 子元素的赋值 */
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderElement = (
    <div>
      <div className="swiper">
        {/* autoplay={true} 是否自动轮播 */}
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false,e)}>
            <IconArrowLeft width={30} height={30} />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true,e)}>
            <IconArrowRight width={30} height={30} />
          </div>
        </div>
        {/* 展示图片 */}
        <Carousel dots={false} ref={slideRef}>
          {itemData?.picture_urls?.map((item) => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </Carousel>
        {/* 设置小圆点 */}
        <div className="indicator">
          <Indicator selectIndex={selectIndex}>
            {itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="dot-item" key={item}>
                  <span
                    className={classNames("dot", {
                      active: index === selectIndex,
                    })}
                  ></span>
                </div>
              );
            })}
          </Indicator>
        </div>
      </div>
    </div>
  );

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}</div>
        <div className="bottom">
          {/* ?? 如果前面为undefined 或 null的时候 用后面的值 */}
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "red" }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.prototype = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
};

export default RoomItem;
