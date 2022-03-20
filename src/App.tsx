import "./App.css";
import { messageList } from "./data";
import MessageList from "./components/messageList/messageList";

const App = () => {
  return <MessageList messageList={messageList} />;
};

export default App;
