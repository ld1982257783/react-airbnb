import styled from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemWidth};
  padding: 8px;
  flex-shrink: 0;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // 不让这张图片压缩
    }
  }

  .swiper {
    position: relative;
    cursor: pointer;

    // 鼠标指过来的时候 显示 flex布局
    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none; // 默认隐藏 左右箭头
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        // 设置透明层
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );

        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }

    .indicator {
      position: absolute;
      bottom: 10px;
      width: 30%;
      z-index: 9;
      // 绝对定位 居中 需要 left right 为 0
      left: 0;
      right: 0;
      margin: 0 auto;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
            background-color: red;
          }
        }
      }
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    height: 35px;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    // 文本超出...
    text-overflow: ellipsis;
    display: -webkit-box;
    // 设置文字两行
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-icon {
      margin-right: -2px;
    }
  }
`;
