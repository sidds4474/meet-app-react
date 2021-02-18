import React from 'react'
import { Item, ItemContent, Segment } from 'semantic-ui-react'

export default function MeetListItem(){
  //https://react.semantic-ui.com/elements/segment
  return(
    <Segment.Group>

    <Segment>

    <Item.Group>

      <Item>

        <Item.Image size='tiny' circular src='/assests/user/png' />
        <Item.Content>
          <Item.Header content='Meeting Title' />
          <Item.Description>
            Hosted By Siddharth
          </Item.Description>
        </Item.Content>

        </Item>

    </Item.Group>

    </Segment>

    </Segment.Group>
  )

}