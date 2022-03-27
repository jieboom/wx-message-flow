import { useState } from "react";
import { generateMessageList } from "../../data";
import PullToReresh from "../common/pullToRefresh/pullToRefresh";
import MessageList from "../messageList/messageList";
const LazyMessageList = () => {
  const [list, setList] = useState<any[]>(generateMessageList(2));
  function handleRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setList((list) => list.concat(generateMessageList(2)));
        resolve(1);
      }, 1000);
    });
  }
  return (
    <PullToReresh onRefresh={handleRefresh}>
      <MessageList messageList={list} />
    </PullToReresh>
  );
};
export default LazyMessageList;
