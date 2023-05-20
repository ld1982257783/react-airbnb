import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  // 1 状态来记录位置
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // 2 监听window滚动
  useEffect(() => {
    // 为什么要在这里节流  因为如果外部组件引用scrollX和scrollY,当 scrollX 或 Y 改变的时候,会造成被依赖的组件重新渲染
    // 如果外部组件滚动的很频繁 则内部handleScroll运行的会很频繁 所以要节流
    const handleScroll = throttle(function handleScroll() {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3 返回位置信息
  return { scrollX, scrollY };
}
