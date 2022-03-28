import React, { TouchEvent, useState } from "react";
let touchTopStart = 0;
let isScrollTouchTop = false;
let isReFreshing = false;
const usePullLoading = (
  wrapperEl: React.RefObject<HTMLDivElement>,
  onRefresh: () => Promise<unknown>
) => {
  const [headHeight, setHeadHeight] = useState(0);
  const [headText, setHeadText] = useState("下拉刷新");
  const MaxHeadHeight = 100;
  const MinRefreshHeight = 50;

  function handleScrollStart(e: TouchEvent) {
    if (wrapperEl.current?.scrollTop !== 0 || isReFreshing) return;
    isScrollTouchTop = true;
    touchTopStart = e.touches[0].clientY;
  }
  function handleScrollMove(e: TouchEvent) {
    if (!isScrollTouchTop) return;
    const moveY = e.touches[0].clientY - touchTopStart;

    // 设置下拉高度
    if (moveY < MaxHeadHeight) {
      setHeadHeight(moveY);
    }
    // 设置下拉文字
    setHeadText(moveY < MinRefreshHeight ? "下拉加载" : "释放立即加载");
  }
  function handleScrollEnd(e: TouchEvent) {
    if (!isScrollTouchTop) return;

    const moveY = e.changedTouches[0].clientY - touchTopStart;
    isScrollTouchTop = false;
    touchTopStart = 0;
    if (moveY < MinRefreshHeight) {
      setHeadHeight(0);
    } else {
      isReFreshing = true;
      setHeadHeight(MinRefreshHeight);
      setHeadText("加载中...");
      onRefresh().then(() => {
        setHeadText("加载成功");
        isReFreshing = false;
        setTimeout(() => {
          setHeadHeight(0);
        }, 500);
      });
    }
  }

  return {
    headHeight,
    headText,
    handleScrollStart,
    handleScrollMove,
    handleScrollEnd,
  };
};
export default usePullLoading;
