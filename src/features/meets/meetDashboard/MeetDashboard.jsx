import React,{useState} from "react";
import { Grid } from "semantic-ui-react";
import MeetForm from "../meetForm/MeetForm";
import MeetList from "./MeetList";
import { sampleData } from "../../../app/api/sampleData";

export default function MeetDashboard({formOpen,setFormOpen}) {

  const [meet,setMeet] = useState(sampleData)

  return (
    // Grid system in semantic ui divides the whole page in 16 parts unlike bootstrap which divides it in 12 parts
    //https://react.semantic-ui.com/collections/grid/#variations-column-width


    <Grid>
      <Grid.Column width={10}>
      {/* state variable */}
        <MeetList meets={meet}/> 
      </Grid.Column>

      <Grid.Column width={6}>
        {formOpen && <MeetForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
}
