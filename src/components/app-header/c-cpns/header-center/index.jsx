import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import PropTypes from "prop-types";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";
import SearchTabs from "./c-cpns/search-tabs";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles?.map((item) => item.title);

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      {/* in 什么时候展示 className 类名 timeout 超时时间 unmountOnExit 动画退出时卸载内部组件 */}
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

HeaderCenter.prototype = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func,
};

export default HeaderCenter;
