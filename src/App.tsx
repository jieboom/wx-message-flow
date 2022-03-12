import { useEffect } from 'react';
import  './App.css';
import { messageList } from './data';
import './plugins/register';
import { getPlugin } from './plugins';

 
const App = () => {
  useEffect(() => {
    
  })
  const renderMessageList = messageList.map(message => {
    const Message = getPlugin(message.MType,message.MBody?.subType)
    return (
      <li className='message-item' key={message.Mid}>
        <Message {...message}></Message>
      </li>
    )
  })
  return (
   <ul className='message-list'>
    {renderMessageList}
   </ul>
  )
}

export default App
