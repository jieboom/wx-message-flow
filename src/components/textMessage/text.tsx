import "./text.css";
import { Message, MTextBody } from "../../data";
import Avatar from "../common/avatar/avatar";
const Text = (props: Message<MTextBody>) => {
  const { MBody } = props;
  return (
    <div
      className={`message-text message ${
        MBody.isSelf ? "message-text__self message__self" : ""
      }`}
    >
      <Avatar avatar={MBody.avatar!} />
      <div className="message-text-content message-content">
        {MBody.content}
      </div>
    </div>
  );
};
export default Text;
