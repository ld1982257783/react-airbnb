import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";

const BannerWrapper = styled.div`
  margin-top: 0 !important;
  height: 529px;
  // 方式1 引入
  background: url(${coverImg}) center/cover;
  // 方式2 引入  新版本webpack需要加 .default 旧版本不需要加
  /* background: url(${require("@/assets/img/cover_01.jpeg")
    .default}) center/cover; */
`;

export default BannerWrapper;
