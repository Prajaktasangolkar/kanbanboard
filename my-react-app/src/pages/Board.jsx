import React, { useState,useEffect } from 'react'
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './Column';
//DragDropContext---> Droppable --> Draggable

export default function Board() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [backlog, setBacklog] = useState([]);
  // const [inReview, setInReview] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
              console.log('hii',json);
              setCompleted(json.filter((task) => task.completed));
              console.log('setCompleted',completed);
              setIncomplete(json.filter((task) => !task.completed));
          });
  }, []);

  const handleDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      console.log('rrr',result);

      if (!destination || source.droppableId === destination.droppableId) return;

      deletePreviousState(source.droppableId, draggableId);

      const task = findItemById(draggableId, [...incomplete, ...completed,  ...backlog]);

      setNewState(destination.droppableId, task);

  };

  function deletePreviousState(sourceDroppableId, taskId) {
      // eslint-disable-next-line default-case
      switch (sourceDroppableId) {
          case "1":
              setIncomplete(removeItemById(taskId, incomplete));
              break;
          case "2":
              setCompleted(removeItemById(taskId, completed));
              break;
        
          case "3":
              setBacklog(removeItemById(taskId, backlog));
              break;
      }

  }
  function setNewState(destinationDroppableId, task) {
      let updatedTask;
      // eslint-disable-next-line default-case
      switch (destinationDroppableId) {
          case "1":   // TO DO
              updatedTask = { ...task, completed: false };
              setIncomplete([updatedTask, ...incomplete]);
              break;
          case "2":  // DONE
              updatedTask = { ...task, completed: true };
              setCompleted([updatedTask, ...completed]);
              break;
          case "3":  // BACKLOG
              updatedTask = { ...task, completed: false };
              setBacklog([updatedTask, ...backlog]);
              break;
      }
  }
  function findItemById(id, array) {
      return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
      return array.filter((item) => item.id != id);
  }

  return (
      <DragDropContext onDragEnd={handleDragEnd}>
          <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%", // Total width of the container
                  maxWidth: "1300px",
                  margin: "0 auto"
              }}
          >
              <Column title={"TO DO"} tasks={incomplete} id={"1"} />
              <Column title={"DONE"} tasks={completed} id={"2"} />
              <Column title={"BACKLOG"} tasks={backlog} id={"3"} />
          </div>
      </DragDropContext>
  );
}