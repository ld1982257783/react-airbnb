import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";

// 分页器的展示
const EntirePagination = memo((props) => {
  // 1 获取总数量 当前页数
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const dispatch = useDispatch()

  // 2 小算法 必须掌握
  const totalPage = Math.ceil(totalCount / 20); // 总页数
  const startCount = currentPage * 20 + 1; // 开始
  const endCount = (currentPage + 1) * 20; // 结束

  // 3 页码发生改变
  function pageChangeHandle(event,pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {!!roomList?.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle}>
            <div className="desc">
              第 {startCount} - {endCount} 个房源,共超过 {totalCount} 个
            </div>
          </Pagination>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
