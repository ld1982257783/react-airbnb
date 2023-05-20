import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 99;
  top: 80px;
  right: 0;
  left: 0;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`;
