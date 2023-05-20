import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin-top: 0 !important;
 

  &.fixed {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
    props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};

    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};

    .top {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? "100px" : "0")};
`;
