import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px; // 在 flex 布局中 设置一个最小宽度
    flex-shrink: 0;   // 超出不压缩
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap; // 不要换行
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow} // 阴影

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
    
  }
`;
