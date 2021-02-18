import React from 'react'
import { Container } from 'semantic-ui-react';
import MeetDashboard from '../../features/meets/meetDashboard/MeetDashboard'
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Container className='main'>
      <MeetDashboard />
      </Container>
     
    </div>
  );
}

export default App;
