import React from 'react';
// import ChatLog from './ChatLog';
import STORE from './STORE';
// import chatEvents from './ChatSTORE';



const findParticipantNameByChatId = (id) => STORE.find(el => el.id === parseInt(id))


class ChatMessage extends React.Component {
    
    // what props does this take in?
    // id, message, time, type
    render() {
        const currName = findParticipantNameByChatId(this.props['data-id']);
        

        const Emoted = function(type) {
            switch(type) {
                case 'thumbs-up':
                    return 'gave a thumbs up!';
                case 'thumbs-down':
                    return 'gave a thumbs down!';
                case 'raise-hand':
                    return 'raised their hand!';
                case 'clap':
                    return 'clapped';
                case 'join':
                    return 'joined';
                case 'leave':
                    return 'left';
                case 'join-stage':
                    return 'joined the stage';
                case 'leave-stage':
                    return 'leaved the stage';
                default:
                    return 'Emoted!';
            }
        }

        var myDate = new Date(this.props.time);
        const timing = myDate.toLocaleString();

        if (this.props.type === 'message') {
             return (
                <div className="single-message">
                    <div className="single-message-header">
                        <div><h5>{currName.name}</h5></div>
                        <div><h6>{timing}</h6></div>
                    </div>
                    <div className="time-container">
                        <p>{this.props.message}</p>
                    </div>
                </div>
             )} else {
                 return (
                   <div className="single-message">
                    {currName.name} {Emoted(this.props.type)}
                   </div>  
                 )
             }
    }
}

export default ChatMessage;