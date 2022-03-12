import { Message, MCardBody } from "../../../data";
import Avatar from "../../common/avatar/avatar";
import './webLink.css'
const Time = (props: Message<MCardBody>) => {
  const {MBody} = props
  function openLink (link:string)  {
     window.open(link,'_blank')
  }
  return (
    <div
      className={`message-card message ${
        MBody.isSelf ? "message-card__self message__self" : ""
      }`}
    >
      <Avatar avatar={MBody.avatar!} />
      <div className="message-card-content message-content" onClick={() => {openLink(MBody.accessLink)}}>
        <p className="message-card-title">{MBody.title}</p>
        <div className="message-card-bottom">
            <p className="message-card-desc">{MBody.desc}</p>
            <img className="message-card-cover" width={80} height={80} src={MBody.coverUrl} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Time;