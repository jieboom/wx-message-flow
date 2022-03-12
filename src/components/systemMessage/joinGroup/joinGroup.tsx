import { MSystemBody, Message } from "../../../data";
import './joinGroup.css'
const JoinGroup = (props: Message<MSystemBody>) => {
  const { MBody } = props;
  return (
    <div className="message-joinGroup message-system">
      {`${MBody.performer} 加入了群组`}
    </div>
  );
};
export default JoinGroup;