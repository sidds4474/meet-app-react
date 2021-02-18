import React from 'react'
import { List, Image } from 'semantic-ui-react'

export default function MeetListAttendee(props){
  return(
    <List.Item>
      <Image size='mini' circular src={props.attendee.photoURL}/>
    </List.Item>
  )

}