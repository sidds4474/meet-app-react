import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

const options = [
  { key: "z", text: "Zoom", value: "zoom" },
  { key: "m", text: "Google Meet", value: "meet" },
  { key: "t", text: "Microsoft Teams", value: "teams" },
];

export default function MeetForm({setFormOpen}) {
  return (
    <Segment clearing>
      <Header content="Create New Meeting" />

      <Form>
        <Form.Field>
          <label>Title</label>
          <input type="text" placeholder="Meeting Title" />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input type="text" placeholder="Description" />
        </Form.Field>

        <Form.Select
          fluid
          label="Platform"
          options={options}
          placeholder="Platform"
        />

        <Form.Field>
          <label>Date and Time</label>
          <input type="datetime-local" placeholder="Date and Time" />
        </Form.Field>

        <Button onClick={() => setFormOpen(false)} type="submit" floated="right" content="Cancel" />
        <Button type="submit" floated="right" positive content="Submit" />
      </Form>
    </Segment>
  );
}
