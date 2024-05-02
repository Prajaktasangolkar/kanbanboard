import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './css/scroll.css'
import Task from './Task';

function Column({title,tasks,id}) {
  console.log(`Tasks in Column ${id}:`, tasks);
  // console.log('hiiii',id);
  return (
    

    <Container className="column">
     <Title
     style={{
      backgroundColor:'#dbb2f1',
      position:'stick',
     }}
     >
      {title}
     </Title>
    <Droppable droppableId={id}>
      {
        (provided,snapshot)=>(
          <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          >
            {/*Provide ur tasks*/}
             {/* <Task 
             task={{id:123,title:'Make a progress board application'}}
             index={1}
             /> */}
            
            {/* make list of task*/}
            {
              tasks.map((task,index)=>(
                <Task key={task.id} index={index} task={task}/>))
                
            }
           
            {provided.placeholder}
          </TaskList>
        )
      }
    </Droppable>


    </Container>
  )
}

const Container=styled.div `
    background-color:#aef5d9;
    border-radius:2.5px;
    width:300px;
    height:475px;
    overflow-y:scroll;
    -ms-overflow-style:none;
    scrollbar-width:none;
    border:1px solid gray;
`;

const Title=styled.h3`
      padding:8px;
      background-color:pink;
      text-align:center;
`;
const TaskList=styled.div`
      padding:3px;
      transistion:background-color 0.2s ease;
      background-color:#aef5d9;
      flex-grow:1;
      min-height:100px;
`


export default Column