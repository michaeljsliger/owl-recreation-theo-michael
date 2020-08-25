import React, { Component } from 'react';
import STORE from './STORE';
import Participant from './Participant'

class ParticipantBox extends Component{

    render(){
        const participantArray = STORE.filter(el => el.inSession === true).map(el => {
            return (<li key={el.id}><Participant  avatar={el.avatar} name={el.name}/></li>)
        })
        return (
          <ul className={this.props.className}>{participantArray}</ul>
        )
    }
}

export default ParticipantBox;