import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import MeetListAttendee from "./MeetListAttendee";

export default function MeetListItem(props) { //we can use destructing here as well
  //https://react.semantic-ui.com/elements/segment
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={props.meet.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={props.meet.title} />
  <Item.Description>Hosted By {props.meet.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {props.meet.date}
          <Icon name="marker" />
          {props.meet.platform}
          <Icon name="clock" />
          {props.meet.time}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {props.meet.attendees.map(attendee=>(
            <MeetListAttendee key={attendee.id} attendee={attendee}/>
          ))}
        </List>

      </Segment>
      <Segment clearing>
        <div>{props.meet.description}</div>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
