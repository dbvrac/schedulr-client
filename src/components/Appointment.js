import React from "react";
import Draggable from "react-draggable";
import { Button, Form, Dropdown, Modal } from "semantic-ui-react";

const Appointment = props => {
  const height = `${props.duration * 2.2}px`;
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const timeMap = times.map(time => {
    return { text: `${time} minutes`, value: `${time}` };
  });

  return (
    <Draggable onStop={props.handleStop} grid={[255, 33.75]} id={props.id}>
      <div
        id={props.id}
        style={{
          position: "absolute",
          top: `${props.y}px`,
          left: `${props.x}px`
        }}
      >
        <Button
          className="orange-button"
          onDoubleClick={props.handleDoubleClick}
          id={props.id}
          style={{
            margin: "1px",
            width: "150px",
            height: `${height}`
          }}
        >
          {props.name}
        </Button>
        <Modal size="tiny" open={props.modalOpen}>
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Content>
            <a onClick={props.handleClose} className="ui right corner label">
              <i onClick={props.handleClose} className="delete icon" />
            </a>
            <Form id={props.id} onSubmit={props.handleSubmit}>
              <div className="field">
                <label
                  style={{
                    color: "#F4FAFF"
                  }}
                >
                  Task Name
                  <input
                    onChange={props.handleChange}
                    type="text"
                    name="name"
                    value={props.name}
                  />
                </label>
              </div>
              <div className="field">
                <label style={{ color: "#F4FAFF" }}>Duration</label>
                <Dropdown
                  placeholder="Select a Duration"
                  selection
                  options={timeMap}
                  onChange={props.handleSelect}
                  name="duration"
                  value={props.duration}
                />
              </div>
              <div className="field">
                <button
                  type="button"
                  id={props.id}
                  onClick={props.onDelete}
                  className="ui negative button"
                >
                  Delete
                </button>
                <button className="ui button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Appointment;
