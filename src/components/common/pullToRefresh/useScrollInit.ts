import { useEffect, useRef } from "react";

const useScrollInit = () => {
  const wrapperEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapperEl.current!;
    el.scrollTo(el.scrollHeight - el.clientHeight, 0);
  }, []);
  return {
    wrapperEl,
  };
};
export default useScrollInit;
