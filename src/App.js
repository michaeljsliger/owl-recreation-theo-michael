import React from 'react';
import Participant from './Participant';
import Stage from './Stage';
import ChatLog from './ChatLog';

// three components, with other subcomponents
// participant list component, participant component
// stage list component (flex box)
// stage individual component
// chat log component, chat entry component
// associated testing


function App() {
  return (
    <div className="App">
      {/* <Participant /> */}
      {/* <ParticipantBox /> */}
      <Stage />
      <ChatLog />
    </div>
  );
}

export default App;
