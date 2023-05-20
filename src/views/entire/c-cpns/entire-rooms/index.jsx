// import PropTypes from 'prop-types'
import React, { memo, useCallback } from "react";
import { RoomWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo((props) => {
  // 从redux中获取roomList数据
  const { roomList, isLoading, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading,
    totalCount: state.entire.totalCount,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** 事件处理 */
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList?.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClickHandle}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  );
});

// EntireRooms.propTypes = {}

export default EntireRooms;
