import React from 'react'
import MyMessage from './MyMessage'
import MessageForm from './MessageForm'
import TheirMessage from './TheirMessage'
const ChatFeed = (props) => {
        // console.log(props)
const{chats,activeChat,userName,messages}=props;
const chat=chats && chats[activeChat];
console.log(chat);
const renderMsg=()=>{
    const keys=Object.keys(messages);
    console.log(keys)
    return keys.map((key,index)=>{
        const message=messages[key];
        const lastMessageKey=index===0 ?null:keys[index-1];
        const isMyMessage=userName===message.sender.userName;

        return(

<div key={`msg_${index}`} style={{width:'100%'}}>
<div className='message'>{
isMyMessage?<MyMessage message={message}/>
 :<TheirMessage message={message} lastMessage={message[lastMessageKey]}/>

}

</div>
<div className='read-receipts' style={{marginRight:isMyMessage ?'18px' :'0px',marginLeft:isMyMessage?"0px":"68px"}}></div>
read
</div>
        );
    })
}
// renderMsg()
if(!chat) return 'Loading...'
  return (
    <div className='chat-feed'>
    <div className='chat-title-container'>
    <div className='chat-title'>{chat.title}</div>
  <div className='chat-subtitle'>
  {chat.people.map((person)=>`${person.person.userName}`)}
  </div>
    </div>
    {renderMsg()}
<div style={{height:'100px'}}>
<div className='messgae-form-container'>
<MessageForm {...props} chtaId={activeChat}/>
</div>
</div>    
    </div>
  )
}


export default ChatFeed