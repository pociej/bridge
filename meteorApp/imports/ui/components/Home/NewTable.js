import React, { useState } from "react";
import {
  Button,
  Header,
  Card,
  Icon,
  Image,
  Grid,
  Modal,
  Form,
  Message,
} from "semantic-ui-react";
import { _ } from "lodash";
import { createNewTable } from "/imports/api/Tables";

export const NewTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [positions, setPositions] = useState({ N: "", S: "", E: "", W: "" });
  const handleChange = (e, v, s) => {
    console.log("E", e, v, s);
  };
  return (
    <Modal
      trigger={
        <Button
          size="massive"
          color="blue"
          className="central"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Start Table
        </Button>
      }
      open={modalOpen}
      onClose={this.handleClose}
      basic
      size="small"
    >
      <Header />
      <Modal.Content>
        <Form {...(error ? { error: true } : {})}>
          <Message error header="Can't create table" content={error} />
          <Form.Group widths="equal">
            <Form.Input
              name="N"
              label="N"
              placeholder="N"
              onChange={(e, v) => {
                const N = v.value;
                setPositions({ ...positions, N });
              }}
            />
            <Form.Input
              name="S"
              label="S"
              placeholder="S"
              onChange={(e, v) => {
                const S = v.value;
                setPositions({ ...positions, S });
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              name="E"
              label="E"
              placeholder="E"
              onChange={(e, v) => {
                const E = v.value;
                setPositions({ ...positions, E });
              }}
            />
            <Form.Input
              name="W"
              label="W"
              placeholder="W"
              onChange={(e, v) => {
                const W = v.value;
                setPositions({ ...positions, W });
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="blue"
          type="submit"
          onClick={(e, { formData }) => {
            e.preventDefault();
            const players = _.map(_.keys(positions), (position) => {
              return {
                position,
                username: positions[position],
              };
            });
            createNewTable.call({ players }, (err, res) => {
              err && setError(err.reason);
            });
          }}
        >
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
