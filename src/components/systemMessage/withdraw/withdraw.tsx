import { MSystemBody, Message } from "../../../data";

const Withdraw = (props: Message<MSystemBody>) => {
  const { MBody } = props;
  return (
    <div className="message-withdraw message-system" >
      <span>
        {MBody.isSelf ? "你" : MBody.performer}
        撤回了一条消息
      </span>
    </div>
  );
};
export default Withdraw;
