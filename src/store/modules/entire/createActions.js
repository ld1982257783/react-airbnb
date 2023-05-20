import { getEntireRoomList } from "@/services";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = (page = 0) => {
  // action 派发函数会自动执行
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page));
    // 1 获取最新页码
    const currentPage = getState().entire.currentPage;
    // console.log("当前页数", currentPage);
    // 2 根据最新页码获取数据
    dispatch(changeIsLoadingAction(true)); // 展示遮罩层
    const res = await getEntireRoomList(currentPage * 20);
    dispatch(changeIsLoadingAction(false)); // 取消遮罩层
    const roomList = res.list;
    const totalCount = res.totalCount;
    // 3 保存到 store中
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
