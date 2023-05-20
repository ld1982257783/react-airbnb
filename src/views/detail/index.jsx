import React, { memo, useEffect } from "react";
import { DetailIndexWrapper } from "./style.js";
import DetailPicture from "./c-cpns/detail-pictures";
import DetailInfos from "./c-cpns/detail-infos";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main.js";
import AppHeader from "@/components/app-header/index.jsx";

const Detail = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailIndexWrapper>
      <AppHeader />
      <DetailPicture />
      <DetailInfos />
    </DetailIndexWrapper>
  );
});

export default Detail;
