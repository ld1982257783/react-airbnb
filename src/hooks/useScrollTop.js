import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const location = useLocation();
  useEffect(() => {
    // 监听路径有没有发生改变
    window.scroll(0, 0);
  }, [location.pathname]);
}
