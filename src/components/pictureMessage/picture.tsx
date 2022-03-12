import  './picture.css'
import { Message,MPicutreBody } from '../../data';
import  Avatar from '../common/avatar/avatar';
const Picture = (props:Message<MPicutreBody>) => {
  const {MBody} = props
  return (
   <div className={`message-picture message ${MBody.isSelf?'message-picture__self message__self':''}`}>
       <Avatar avatar={MBody.avatar!} />
       <div className='message-picture-content message-content'>
           <img src={MBody.picUrl} alt="" className='message-picture-image'/>
           </div>
       </div>
  )
}
export default Picture