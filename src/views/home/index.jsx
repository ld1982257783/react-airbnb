import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";
// import { Button } from "@mui/material";

const Home = memo(() => {
  // 从redux中获取数据  shallowEqual 数据发生改变的时候才重新获取
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  // 派发异步的事件: 发送网络请求
  const dispatch = useDispatch();

  useEffect(() => {
    // 派发函数执行
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <AppHeader />
      <HomeBanner />
      <div className="content">
        {isEmptyO(longforInfo) && <HomeLongFor infoData={longforInfo} />}

        {/* 折扣数据 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}

        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}

        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>

      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> 
      <Button variant="outlined">Outlined</Button> */}
    </HomeWrapper>
  );
});

export default Home;
