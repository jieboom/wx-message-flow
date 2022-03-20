import { useEffect } from "react";
import "../../plugins/register";
import { getPlugin } from "../../plugins";
import { Message, MSomeBodyType } from "../../data";
interface messageListProps {
  messageList: Message<MSomeBodyType>[];
}
const MessageList = (props: messageListProps) => {
  useEffect(() => {});
  const renderMessageList = props.messageList.map((message) => {
    const Message = getPlugin(message.MType, message.MBody?.subType);
    return (
      <li className="message-item" key={message.Mid}>
        <Message {...message}></Message>
      </li>
    );
  });
  return <ul className="message-list">{renderMessageList}</ul>;
};

export default MessageList;
