import React, {Component} from 'react';
import ChatMessage from './ChatMessage';
import chatEvents from './ChatSTORE';
// import STORE from './STORE'

// in array of JSX elements, 
// match id to STORE id for obj
// if type message {
    // display message
    // timestamp new Date(props.time)
//}


class ChatLog extends Component {
// takes in store
    render() {
        let key = 0;
        const chatMessageArray = chatEvents.map(el => {
                
                return (<li className="chat-message-box" key={key++}><ChatMessage type={el.type} data-id={el.participantId} message={el.message} time={el.time}/></li>)
        })


        return (
        <ul className="chat-list">{chatMessageArray}</ul>
        )
    }
}

export default ChatLog;