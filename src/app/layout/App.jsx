import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import MeetDashboard from '../../features/meets/meetDashboard/MeetDashboard'
import NavBar from '../../features/nav/NavBar';

function App() {

  const [formOpen,setFormOpen]=useState(false)
  return (
    <div>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
      <MeetDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
     
    </div>
  );
}

export default App;
