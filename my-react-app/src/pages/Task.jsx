import { Avatar } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

function bgcolorChange(props) {
  return props.isDragging
    ? "lightgreen"
    : props.isDraggable
    ? props.isBacklog
      ? "#F2D7D5"
      : "#DCDCDC"
    : props.isBacklog
    ? "#F2D7D5"
    : "#abb5ff";
}
/*
If props.isDragging is true, it sets the background color to "lightgreen", indicating that the item is being dragged.
If props.isDraggable is true:
If props.isBacklog is true, it sets the background color to '#F2D7D5', indicating that the item is draggable and in the backlog.
If props.isBacklog is false, it sets the background color to '#DCDCDC', indicating that the item is draggable but not in the backlog.
If props.isDraggable is false:
If props.isBacklog is true, it sets the background color to '#F2D7D5', indicating that the item is not draggable but is in the backlog.
If props.isBacklog is false, it sets the background color to '#fffada', indicating that the item is neither draggable nor in the backlog.

*/
function Task({ task, index }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        >
         
          {/* task id */}
          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>#{task.id} </small>
            </span>
          </div>
          {/* task title */}
          <div
            style={{ display: "flex", justifyContent: "center", padding: 2 }}
          >
            <TextContent>{task.title}</TextContent>
          </div>
          {/* icons */}
          <Icons>
            <div>
              <Avatar
                onClick={() => console.log(task)}
                src={"https://joesch.moe/api/v1/random?key=" + task.id}
              />
            </div>
          </Icons>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}

const Container = styled.div`
  border-radius: 10px;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${(props) => bgcolorChange(props)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const TextContent = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
`;
export default Task;
