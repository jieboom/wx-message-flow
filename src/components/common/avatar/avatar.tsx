import './avatar.css'
const Avatar = (props:{avatar:string}) => {
  return (
   <img className='message-avatar' src={props.avatar} alt="" width={40} height={40} />
  )
}
export default Avatar