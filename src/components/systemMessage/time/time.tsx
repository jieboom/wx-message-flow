import { MSystemBody, Message } from "../../../data";

const Time = (props: Message<MSystemBody>) => {
  const localTime = new Date(props.MtimeStamp).toLocaleString()
  return (
    <div className="message-time message-system">
      {localTime}
    </div>
  );
};
export default Time;