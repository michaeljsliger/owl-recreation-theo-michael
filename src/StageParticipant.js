import React, {Component} from 'react';


class StageParticipant extends Component {
    // what props?
    // ID, Name, Avatar, Onstage, InSession
    // key, name, avatar

    // render template
    render() {
        return (
        <div className="stage-piece">
            <div className="stage-contact" id={this.props.id}>
                <div className="stage-contact-header">
                    {this.props.name}
                </div>
               <img className="stage-contact-image" src={this.props.avatar} alt="huh" />
            </div>
        </div>
        );
    }
}

export default StageParticipant;