import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar(){

  return(
    <Menu inverted fixed='top'>
      <Container>

        <Menu.Item header>
          {/* https://seeklogo.com/vector-logo/337290/google-meet */}

          <img src="/assets/logo.svg" alt="logo" style={{marginRight:15}}/>
          MeetApp
        </Menu.Item>

      <Menu.Item name='Meets'/>

      <Menu.Item>
        <Button positive inverted content='Create a Meeting'/>
      </Menu.Item>

    <Menu.Item position='right'>

      <Button basic inverted content='Login'/>
      <Button basic inverted content='Register' style={{marginLeft:'0.5em'}}/>

    </Menu.Item>

      </Container>
    </Menu>
  )

}