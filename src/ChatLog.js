import React, {Component} from 'react';
import ChatMessage from './ChatMessage';
import chatEvents from './ChatSTORE';
import STORE from './STORE'

// in array of JSX elements, 
// match id to STORE id for obj
// if type message {
    // display message
    // timestamp new Date(props.time)
//}

const findParticipantNameByChatId = (id) => STORE.find(el => el.id === id).name
console.log(findParticipantNameByChatId(1))

class ChatLog extends Component {
// takes in store
    render() {
        const chatMessageArray = chatEvents.map(el => {
            if (el.type === 'message') {
                return (<li key={el.id}><ChatMessage type={el.type} id={el.id} message={el.message} time={el.time}/></li>)
            }
            
        })


        return (
        <ul className="chat-list">{chatMessageArray}</ul>
        )
    }
}

export default ChatLog;