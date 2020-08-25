import React, { Component } from 'react';
import STORE from './STORE';
import Participant from './Participant'

class ParticipantBox extends Component{

    render(){

        const participantArray = STORE.filter(el => el.inSession === true).map(el => {
            return (<li key={el.id}><Participant  avatar={el.avatar} name={el.name}/></li>)
        })
        return (
        <div className='participant-box'>
            <div className="button-box">
            <button type="button" className="chat">
                Chat 
            </button>
            <button type ="button" className="participants">
                Particpants
            </button>
           </div>
          <ul className={this.props.className}>{participantArray}</ul>
        </div>
        )
    }
}

export default ParticipantBox;