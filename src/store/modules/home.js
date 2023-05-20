import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1 单个 异步请求处理
// export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
//     const res = await getHomeGoodPriceData()
//     return res
// })

// 2 多个异步请求处理
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoActions(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });

    getHomeLongforData().then((res) => {
      dispatch(changeLongForAction(res));
    });

    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    // 定义action
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoActions(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // 额外reducers 监听异步请求的状态
  extraReducers: (builder) => {
    // 链式调用 异步请求才需要监听状态
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   state.goodPriceInfo = payload;
    // });
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoActions,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForAction,
  changePlusInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
