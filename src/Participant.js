import React, {Component} from 'react';





class Participant extends Component {
    render(){
        return(
            <div className="sessionParticipant">
            
                    <img className="user-avatar" src={this.props.avatar} alt="avatar"/>
            

                <div className= "participant-info" id={this.props.id}>
                    <h6 className= "particpant-name">{this.props.name}</h6>
                </div>
                <div className="participant-status"> 

                </div>
            </div>  

        
         
        )

    }
}
export default Participant;