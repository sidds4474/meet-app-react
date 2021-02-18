import React from 'react'
import {Grid} from 'semantic-ui-react'
import MeetList from './MeetList'

export default function MeetDashboard(){
  return (

    // Grid system in semantic ui divides the whole page in 16 parts unlike bootstrap which divides it in 12 parts
    //https://react.semantic-ui.com/collections/grid/#variations-column-width

    <Grid> 
      <Grid.Column width={10}>
     <MeetList />
    </Grid.Column>

    <Grid.Column width={6}>
      <h2>Right</h2>
    </Grid.Column>

    </Grid>

  )

}