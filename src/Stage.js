import React, { Component } from 'react';
import STORE from './STORE';
// import STORE from './STORE';
import StageParticipant from './StageParticipant'



class Stage extends Component {
    render() {
        const stageParticipantArray = STORE.filter(el => el.onStage === true).map(el => {
           return (<li key={el.id}><StageParticipant  avatar={el.avatar} name={el.name}/></li>)
        })
        return (
            <ul className={this.props.classNamee}>{stageParticipantArray}</ul>
        )
    }
}

export default Stage;