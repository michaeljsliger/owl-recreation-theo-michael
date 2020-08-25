import React from 'react';
import Stage from './Stage';
import ChatLog from './ChatLog';
import ParticipantBox from './participantBox';

// three components, with other subcomponents
// participant list component, participant component
// stage list component (flex box)
// stage individual component
// chat log component, chat entry component
// associated testing


function App() {
  return (
    <div className="App">
      <ParticipantBox />
      <Stage />
      <ChatLog />
    </div>
  );
}

export default App;
