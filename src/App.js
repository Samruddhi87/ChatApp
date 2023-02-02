import './App.css';
import {ChatEngine, ChatFeed} from 'react-chat-engine';

function App() {
  return (

<ChatEngine 
height='100vh'
projectID="32d215b1-52d2-46c4-9b37-bb164832b45c"
userName="john"
userSecret="123"
renderChatFeed={(chatAppPros)=><ChatFeed {...chatAppPros}/>}
onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

/>
   
   
  );
}

export default App;
