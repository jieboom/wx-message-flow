import { ReactElement } from "react";
import "./pullToRefresh.css";
import usePullLoading from "./usePullLoading";
import useScrollInit from "./useScrollInit";
const PullToReresh = (props: {
  children: ReactElement;
  onRefresh: () => Promise<unknown>;
}) => {
  const { wrapperEl } = useScrollInit();
  const {
    headHeight,
    headText,
    handleScrollEnd,
    handleScrollMove,
    handleScrollStart,
  } = usePullLoading(wrapperEl, props.onRefresh);
  return (
    <div
      ref={wrapperEl}
      className="refresh-wrapper"
      onTouchStart={handleScrollStart}
      onTouchMove={handleScrollMove}
      onTouchEnd={handleScrollEnd}
    >
      <div className="refresh-head" style={{ height: headHeight + "px" }}>
        <div
          style={{ height: "50px", lineHeight: "50px", textAlign: "center" }}
          className="refresh-text"
        >
          {headText}
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default PullToReresh;
